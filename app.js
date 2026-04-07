const PROFILE_KEY = "sydney-tile-craft-profile";
const DB_NAME = "sydney-tile-craft-media";
const DB_VERSION = 1;
const STORE_NAME = "gallery";

const defaultProfile = {
  headline: "Sydney tile installation for homes, renovations and commercial spaces",
  intro:
    "我们专注于悉尼本地商业与住宅贴瓷砖服务，适合浴室翻新、厨房升级、零售店铺装修、自住房和投资房施工。",
  phone: "+61 4 12 345 678",
  email: "hello@sydneytilecraft.com",
  serviceArea: "Sydney CBD, Inner West, North Shore, Eastern Suburbs, Parramatta",
  customerFit: [
    "商业装修团队和零售店主",
    "自住房与投资房业主",
    "翻新承包商与 builder",
    "需要局部修补和整屋升级的客户",
  ],
};

const bundledMedia = [
  "442.JPG",
  "443.JPG",
  "444.JPG",
  "445.JPG",
  "447.JPG",
  "450.JPG",
  "451.JPG",
  "452.JPG",
  "454.JPG",
  "453.MP4",
  "455.MP4",
].map((fileName, index) => ({
  id: `bundled-${fileName.toLowerCase()}`,
  title: `Sydney Tile Project ${index + 1}`,
  caption:
    fileName.endsWith(".MP4")
      ? "现场施工视频，展示瓷砖铺贴完成效果与空间细节。"
      : "来自网站本地素材库的真实施工照片，可用于展示住宅或商业贴砖案例。",
  kind: fileName.endsWith(".MP4") ? "video" : "image",
  fileName,
  dataUrl: `./tiles/${fileName}`,
  bundled: true,
}));

const state = {
  profile: loadProfile(),
  media: [],
  uploadedMedia: [],
  db: null,
};

const els = {
  ownerModeButton: document.querySelector("#ownerModeButton"),
  ownerDialog: document.querySelector("#ownerDialog"),
  headlineInput: document.querySelector("#headlineInput"),
  introInput: document.querySelector("#introInput"),
  phoneInput: document.querySelector("#phoneInput"),
  emailInput: document.querySelector("#emailInput"),
  serviceAreaInput: document.querySelector("#serviceAreaInput"),
  customerFitInput: document.querySelector("#customerFitInput"),
  saveProfileButton: document.querySelector("#saveProfileButton"),
  uploadMediaButton: document.querySelector("#uploadMediaButton"),
  mediaTitleInput: document.querySelector("#mediaTitleInput"),
  mediaCaptionInput: document.querySelector("#mediaCaptionInput"),
  mediaFileInput: document.querySelector("#mediaFileInput"),
  uploadStatus: document.querySelector("#uploadStatus"),
  galleryGrid: document.querySelector("#galleryGrid"),
  ownerMediaList: document.querySelector("#ownerMediaList"),
  phoneText: document.querySelector("#phoneText"),
  emailText: document.querySelector("#emailText"),
  serviceAreaText: document.querySelector("#serviceAreaText"),
  phoneLink: document.querySelector("#phoneLink"),
  emailLink: document.querySelector("#emailLink"),
  businessHeadline: document.querySelector("#businessHeadline"),
  businessIntro: document.querySelector("#businessIntro"),
  customerFitList: document.querySelector("#customerFitList"),
  galleryItemTemplate: document.querySelector("#galleryItemTemplate"),
};

function loadProfile() {
  try {
    const saved = localStorage.getItem(PROFILE_KEY);
    if (!saved) return { ...defaultProfile };
    const parsed = JSON.parse(saved);
    return { ...defaultProfile, ...parsed };
  } catch {
    return { ...defaultProfile };
  }
}

function saveProfile() {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(state.profile));
}

function renderProfile() {
  els.phoneText.textContent = state.profile.phone;
  els.emailText.textContent = state.profile.email;
  els.serviceAreaText.textContent = state.profile.serviceArea;
  els.phoneLink.href = `tel:${state.profile.phone.replace(/\s+/g, "")}`;
  els.emailLink.href = `mailto:${state.profile.email}`;
  els.businessHeadline.textContent = state.profile.headline;
  els.businessIntro.textContent = state.profile.intro;

  els.customerFitList.innerHTML = "";
  state.profile.customerFit.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.customerFitList.appendChild(li);
  });
}

function fillOwnerForm() {
  els.headlineInput.value = state.profile.headline;
  els.introInput.value = state.profile.intro;
  els.phoneInput.value = state.profile.phone;
  els.emailInput.value = state.profile.email;
  els.serviceAreaInput.value = state.profile.serviceArea;
  els.customerFitInput.value = state.profile.customerFit.join("\n");
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function tx(storeMode) {
  const transaction = state.db.transaction(STORE_NAME, storeMode);
  return transaction.objectStore(STORE_NAME);
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function loadMedia() {
  if (state.db) {
    const records = await requestToPromise(tx("readonly").getAll());
    state.uploadedMedia = records.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  } else {
    state.uploadedMedia = [];
  }
  syncMedia();
  renderGallery();
  renderOwnerMediaList();
}

function syncMedia() {
  state.media = [...state.uploadedMedia, ...bundledMedia];
}

function createMediaNode(item) {
  const wrap = document.createElement("div");
  if (item.kind === "video") {
    const video = document.createElement("video");
    video.src = item.dataUrl;
    video.controls = true;
    video.playsInline = true;
    wrap.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = item.dataUrl;
    img.alt = item.title;
    wrap.appendChild(img);
  }
  return wrap;
}

function renderGallery() {
  els.galleryGrid.innerHTML = "";
  if (!state.media.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "还没有上传案例，打开 Owner Panel 添加你的图片或视频。";
    els.galleryGrid.appendChild(empty);
    return;
  }

  state.media.forEach((item) => {
    const fragment = els.galleryItemTemplate.content.cloneNode(true);
    const mediaContainer = fragment.querySelector(".gallery-media");
    const copy = createMediaNode(item);
    mediaContainer.appendChild(copy.firstChild);
    fragment.querySelector(".gallery-tag").textContent = item.kind === "video" ? "Project Video" : "Project Photo";
    fragment.querySelector(".gallery-title").textContent = item.title;
    fragment.querySelector(".gallery-caption").textContent = item.caption;
    els.galleryGrid.appendChild(fragment);
  });
}

function renderOwnerMediaList() {
  els.ownerMediaList.innerHTML = "";
  if (!state.media.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "上传后的素材会显示在这里。";
    els.ownerMediaList.appendChild(empty);
    return;
  }

  state.media.forEach((item) => {
    const row = document.createElement("div");
    row.className = "owner-media-item";
    const actionMarkup = item.bundled
      ? '<span class="owner-tag">网站内置素材</span>'
      : `<button class="ghost-btn delete-upload-button" type="button" data-id="${item.id}">删除</button>`;
    row.innerHTML = `
      <div class="owner-media-meta">
        <strong>${item.title}</strong>
        <span>${item.kind === "video" ? "视频" : "图片"} · ${item.fileName || "custom upload"}</span>
      </div>
      ${actionMarkup}
    `;
    els.ownerMediaList.appendChild(row);
  });
}

async function persistMedia(item) {
  if (!state.db) return;
  await requestToPromise(tx("readwrite").put(item));
}

async function deleteMedia(id) {
  state.uploadedMedia = state.uploadedMedia.filter((item) => item.id !== id);
  if (state.db) {
    await requestToPromise(tx("readwrite").delete(id));
  }
  syncMedia();
  renderGallery();
  renderOwnerMediaList();
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function uploadSelectedMedia() {
  const files = [...els.mediaFileInput.files];
  if (!files.length) {
    els.uploadStatus.textContent = "请先选择至少一个图片或视频文件。";
    return;
  }

  const baseTitle = els.mediaTitleInput.value.trim() || "Sydney Tiling Project";
  const baseCaption = els.mediaCaptionInput.value.trim() || "悉尼本地贴瓷砖项目案例";

  els.uploadStatus.textContent = "正在处理上传文件...";

  for (const [index, file] of files.entries()) {
    const dataUrl = await fileToDataUrl(file);
    const kind = file.type.startsWith("video/") ? "video" : "image";
    const mediaItem = {
      id: `${Date.now()}-${index}-${Math.random().toString(16).slice(2, 8)}`,
      title: files.length === 1 ? baseTitle : `${baseTitle} ${index + 1}`,
      caption: baseCaption,
      kind,
      fileName: file.name,
      dataUrl,
      createdAt: new Date().toISOString(),
      bundled: false,
    };
    state.uploadedMedia.unshift(mediaItem);
    await persistMedia(mediaItem);
  }

  syncMedia();
  renderGallery();
  renderOwnerMediaList();
  els.mediaFileInput.value = "";
  els.mediaTitleInput.value = "";
  els.mediaCaptionInput.value = "";
  els.uploadStatus.textContent = "上传完成，页面案例区已更新。";
}

function saveProfileFromInputs() {
  const customerFit = els.customerFitInput.value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  state.profile = {
    headline: els.headlineInput.value.trim() || defaultProfile.headline,
    intro: els.introInput.value.trim() || defaultProfile.intro,
    phone: els.phoneInput.value.trim() || defaultProfile.phone,
    email: els.emailInput.value.trim() || defaultProfile.email,
    serviceArea: els.serviceAreaInput.value.trim() || defaultProfile.serviceArea,
    customerFit: customerFit.length ? customerFit : defaultProfile.customerFit,
  };
  saveProfile();
  renderProfile();
}

function bindEvents() {
  els.ownerModeButton.addEventListener("click", () => {
    fillOwnerForm();
    els.uploadStatus.textContent = "";
    els.ownerDialog.showModal();
  });

  els.saveProfileButton.addEventListener("click", () => {
    saveProfileFromInputs();
  });

  els.uploadMediaButton.addEventListener("click", () => {
    uploadSelectedMedia().catch(() => {
      els.uploadStatus.textContent = "上传失败，请换一个文件再试。";
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.dataset.id) return;
    if (!target.matches(".delete-upload-button")) return;
    deleteMedia(target.dataset.id).catch(() => {
      els.uploadStatus.textContent = "删除失败，请刷新页面后重试。";
    });
  });
}

async function init() {
  renderProfile();
  fillOwnerForm();
  bindEvents();
  try {
    state.db = await openDb();
  } catch {
    state.db = null;
  }
  await loadMedia();
}

init();
