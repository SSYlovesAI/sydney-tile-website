const PROFILE_KEY = "jack-tiling-profile";
const LANG_KEY = "jack-tiling-language";
const DB_NAME = "jack-tiling-media";
const DB_VERSION = 1;
const STORE_NAME = "gallery";

const defaultProfile = {
  phone: "0407 543 531",
  email: "shaolinwang81@gmail.com",
  translations: {
    en: {
      headline: "Jack Wang Tiling Services for homes, renovations and commercial spaces in Sydney",
      intro:
        "Jack Wang Tiling Services delivers reliable tiling for bathrooms, kitchens, retail spaces, investment properties and renovation projects across Sydney.",
      serviceArea: "Sydney CBD, Inner West, North Shore, Eastern Suburbs, Parramatta",
      customerFit: [
        "Homeowners renovating bathrooms, kitchens and living spaces",
        "Builders, renovators and fit-out teams",
        "Retail, cafe and office refurbishment projects",
        "Property owners needing repairs, upgrades or fresh tiling",
      ],
    },
    zh: {
      headline: "Jack Wang Tiling Services 承接悉尼住宅翻新、商业装修和各类贴砖工程",
      intro:
        "Jack Wang Tiling Services 专注于悉尼本地商业与住宅贴瓷砖服务，适合浴室翻新、厨房升级、零售店铺装修、自住房和投资房施工。",
      serviceArea: "悉尼 CBD、Inner West、North Shore、Eastern Suburbs、Parramatta",
      customerFit: [
        "需要浴室、厨房和居家空间翻新的业主",
        "Builder、翻新承包商和装修施工团队",
        "商铺、咖啡馆和办公室装修项目",
        "需要修补、更新或重新铺贴瓷砖的物业业主",
      ],
    },
  },
};

const uiText = {
  en: {
    htmlLang: "en",
    title: "Jack Wang Tiling Services | Sydney Tiling Services",
    metaDescription:
      "Jack Wang Tiling Services provides residential and commercial tiling across Sydney, including bathrooms, kitchens, outdoor areas and renovation work.",
    brandEyebrow: "Sydney, Australia",
    navServices: "Services",
    navProjects: "Project Types",
    navGallery: "Gallery",
    navContact: "Contact",
    ownerModeButton: "Owner Panel",
    heroEyebrow: "Trusted Tiling Contractor in Sydney",
    heroTitle: "Commercial and residential tiling across Sydney",
    heroText:
      "We handle bathrooms, kitchens, retail spaces, offices, outdoor areas and renovation jobs with clean finishes and reliable workmanship.",
    heroPrimaryCta: "Request a quote",
    heroSecondaryCta: "View gallery",
    heroStats: [
      { label: "Commercial", text: "Retail, office and showroom spaces" },
      { label: "Residential", text: "Bathrooms, kitchens, floors and walls" },
      { label: "Sydney Wide", text: "Available across metro Sydney and surrounds" },
    ],
    highlightLabel: "Why clients call us",
    highlightItems: [
      "Clean set-out and layout that reduces waste and rework",
      "Suitable for both commercial fit-outs and private homes",
      "Available for fresh tiling, renovation upgrades and repairs",
      "Careful finishing on edges, falls, waterproof coordination and detailing",
    ],
    showcaseCards: [
      { tone: "warm", label: "Bathroom Renovation", title: "Bathroom wall and floor tiling" },
      { tone: "clay", label: "Kitchen Splashback", title: "Kitchen splashback tiling" },
      { tone: "dark", label: "Retail Fit-out", title: "Shop and commercial floor tiling" },
      { tone: "sand", label: "Outdoor Area", title: "Balcony and patio tiling" },
    ],
    servicesEyebrow: "Services",
    servicesTitle: "What we can tile",
    servicesText:
      "We work with homeowners, builders, renovators and commercial clients across Sydney for new tiling, upgrades and repair work.",
    servicesCards: [
      {
        title: "Residential tiling",
        text: "Bathrooms, kitchens, living areas, laundries, balconies and other home spaces for wall and floor tiling.",
      },
      {
        title: "Commercial tiling",
        text: "Cafe, retail, office, showroom and tenancy upgrade projects that need consistent quality and schedule coordination.",
      },
      {
        title: "Renovation and repairs",
        text: "Tile replacement, partial patching, grout refresh, silicone finishing and practical upgrades for older spaces.",
      },
      {
        title: "Outdoor and feature tiling",
        text: "Outdoor anti-slip tiles, steps, feature walls, herringbone layouts, hexagon tiles and large-format tile work.",
      },
    ],
    projectsEyebrow: "Project Types",
    projectsTitle: "Jobs we take on",
    projectCards: [
      {
        title: "Commercial fit-outs",
        text: "Suitable for shops, cafes and offices that need tiling aligned with site flow, deadlines and presentation standards.",
      },
      {
        title: "Private homes",
        text: "For owner-occupied homes and investment properties, including new builds, upgrades, renovations and rental refreshes.",
      },
      {
        title: "Builders and renovators",
        text: "Able to work with builders, designers, plumbers and waterproofing teams on multi-trade renovation projects.",
      },
    ],
    quoteLabel: "Quick quote flow",
    quoteSteps: [
      "Send the suburb, dimensions and current site photos",
      "Let us know whether it is a residential or commercial project",
      "Confirm tile type, preferred finish and timing requirements",
      "Arrange a quote and site discussion",
    ],
    galleryEyebrow: "Gallery",
    galleryTitle: "Project photos and videos",
    galleryText:
      "This section shows real project media. You can also upload more images and videos from the Owner Panel.",
    galleryNoteTitle: "Owner Tips",
    galleryNoteText:
      "Content uploaded in the Owner Panel is stored in this browser for local demos and future expansion.",
    focusEyebrow: "What We Focus On",
    focusTitle: "What clients usually care about",
    focusCards: [
      {
        title: "Finish quality",
        text: "Tile joints, alignment, corners and edge finishing make the biggest difference to the final look.",
      },
      {
        title: "Communication",
        text: "Clear details on timing, layout, materials and expectations reduce rework and help everyone coordinate on site.",
      },
      {
        title: "Reliable delivery",
        text: "Whether it is a home renovation or a commercial fit-out, quality and timing both need to be delivered properly.",
      },
    ],
    contactEyebrow: "Contact",
    contactTitle: "Get in touch for tiling work in Sydney",
    contactText:
      "Keep your phone, email and service area here so customers can contact you directly. These details can be updated in the Owner Panel.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    serviceAreaLabel: "Service Area",
    businessIntroLabel: "Business Intro",
    bestFitLabel: "Best Fit Clients",
    ownerEyebrow: "Owner Panel",
    ownerTitle: "Manage site content",
    ownerCloseButton: "Close",
    ownerContentTitle: "Bilingual business content",
    ownerContentHint: "Use both language fields to keep the public website fully bilingual.",
    ownerSharedTitle: "Shared contact details",
    ownerPhoneLabel: "Phone",
    ownerEmailLabel: "Email",
    ownerEnglishTitle: "English content",
    headlineEnLabel: "Business headline (English)",
    introEnLabel: "Business intro (English)",
    serviceAreaEnLabel: "Service area (English)",
    customerFitEnLabel: "Best fit clients (English, one per line)",
    ownerChineseTitle: "Chinese content",
    headlineZhLabel: "Business headline (Chinese)",
    introZhLabel: "Business intro (Chinese)",
    serviceAreaZhLabel: "Service area (Chinese)",
    customerFitZhLabel: "Best fit clients (Chinese, one per line)",
    saveProfileButton: "Save content",
    uploadSectionTitle: "Upload gallery media",
    uploadSectionHint:
      "Add both English and Chinese titles or captions if you want uploaded items to stay bilingual.",
    mediaTitleEnLabel: "Gallery title (English)",
    mediaTitleZhLabel: "Gallery title (Chinese)",
    mediaCaptionEnLabel: "Caption (English)",
    mediaCaptionZhLabel: "Caption (Chinese)",
    mediaFileLabel: "Choose images or videos",
    uploadMediaButton: "Upload to gallery",
    mediaTitleEnPlaceholder: "Example: North Sydney Bathroom",
    mediaTitleZhPlaceholder: "Example: North Sydney Bathroom in Chinese",
    mediaCaptionEnPlaceholder: "Example: Large-format grey tiles with refined shower detailing",
    mediaCaptionZhPlaceholder: "Example: Chinese caption for the same project",
    galleryTagPhoto: "Project Photo",
    galleryTagVideo: "Project Video",
    emptyGallery: "No gallery items yet. Open the Owner Panel to add photos or videos.",
    ownerEmptyMedia: "Uploaded items will appear here.",
    ownerTagBundled: "Built-in media",
    mediaKindImage: "Image",
    mediaKindVideo: "Video",
    deleteLabel: "Delete",
    uploadNeedFile: "Please choose at least one image or video file.",
    uploadProcessing: "Processing files...",
    uploadSuccess: "Upload complete. The gallery has been updated.",
    uploadError: "Upload failed. Please try a different file.",
    deleteError: "Delete failed. Please refresh and try again.",
    defaultUploadTitle: "Sydney tiling project",
    defaultUploadCaption: "Real tiling work completed in Sydney",
  },
  zh: {
    htmlLang: "zh-CN",
    title: "Jack Wang Tiling Services | 悉尼贴瓷砖服务",
    metaDescription:
      "Jack Wang Tiling Services 提供悉尼本地商业与住宅贴瓷砖、浴室翻新、厨房墙地砖、户外区域和装修配套服务。",
    brandEyebrow: "澳大利亚悉尼",
    navServices: "服务",
    navProjects: "项目类型",
    navGallery: "案例",
    navContact: "联系",
    ownerModeButton: "站长面板",
    heroEyebrow: "悉尼值得信赖的贴砖承包服务",
    heroTitle: "承接悉尼商业与住宅贴瓷砖工程",
    heroText:
      "从浴室、厨房、商铺、办公室到户外区域和翻新项目，我们提供整洁细致、交付可靠的贴砖工艺服务。",
    heroPrimaryCta: "获取报价",
    heroSecondaryCta: "查看案例",
    heroStats: [
      { label: "商业项目", text: "商铺、办公室、展示空间" },
      { label: "住宅项目", text: "浴室、厨房、墙面和地面" },
      { label: "悉尼范围", text: "悉尼城区及周边可上门施工" },
    ],
    highlightLabel: "客户为什么会联系我们",
    highlightItems: [
      "排版整齐、施工细致，减少浪费和返工",
      "商业装修和住宅项目都可以承接",
      "支持新铺、翻新升级和局部修补",
      "注重收边、坡度、防水配合和细节处理",
    ],
    showcaseCards: [
      { tone: "warm", label: "浴室翻新", title: "浴室墙地砖施工" },
      { tone: "clay", label: "厨房挡水墙", title: "厨房墙砖与 splashback" },
      { tone: "dark", label: "商铺装修", title: "商铺与商业地砖施工" },
      { tone: "sand", label: "户外区域", title: "阳台与露台贴砖" },
    ],
    servicesEyebrow: "服务",
    servicesTitle: "贴砖服务范围",
    servicesText:
      "面向悉尼本地业主、builder、翻新承包商和商业客户，覆盖新铺、翻新、升级和修补等常见贴砖需求。",
    servicesCards: [
      {
        title: "住宅贴砖",
        text: "适用于浴室、厨房、客厅、laundry、阳台等住宅空间的墙地砖施工与更新。",
      },
      {
        title: "商业贴砖",
        text: "适合咖啡馆、商铺、办公室、展示空间和租赁物业升级等商业项目的批量铺贴。",
      },
      {
        title: "翻新修补",
        text: "旧砖拆换、局部补砖、勾缝翻新、硅胶收边和旧空间整体焕新。",
      },
      {
        title: "户外与特色贴砖",
        text: "户外防滑砖、台阶、背景墙、人字铺、六角砖和大规格瓷砖等特殊工艺。",
      },
    ],
    projectsEyebrow: "项目类型",
    projectsTitle: "可承接的工程类型",
    projectCards: [
      {
        title: "商业装修项目",
        text: "适合商场店铺、咖啡馆和办公室翻新，需要配合现场流程、工期节点和整体观感的项目。",
      },
      {
        title: "住宅与自住房",
        text: "面向自住房和投资房，包括新房施工、二手房翻新、出租屋整修和局部升级。",
      },
      {
        title: "Builder 与翻新团队",
        text: "可与 builder、designer、plumber 和 waterproofing 团队配合推进多工种项目。",
      },
    ],
    quoteLabel: "快速报价流程",
    quoteSteps: [
      "发送所在区域、尺寸和现场照片",
      "说明是住宅项目还是商业项目",
      "确认砖材类型、完成效果和工期要求",
      "安排报价和现场沟通",
    ],
    galleryEyebrow: "案例",
    galleryTitle: "项目图片与视频案例",
    galleryText:
      "这里展示真实施工素材。你也可以通过站长面板继续上传更多图片和视频。",
    galleryNoteTitle: "站长提示",
    galleryNoteText: "站长面板上传的内容会保存在当前浏览器中，适合本地演示和后续扩展后台。",
    focusEyebrow: "我们重点关注",
    focusTitle: "客户通常最在意这些",
    focusCards: [
      {
        title: "完成质量",
        text: "砖缝、对缝、阴阳角和收边是否整洁，直接决定最终空间质感。",
      },
      {
        title: "沟通配合",
        text: "提前确认工期、排版、材料和细节，能减少返工，也方便现场统筹。",
      },
      {
        title: "可靠交付",
        text: "无论是家庭翻新还是商业装修，都需要把质量和进度一起交付到位。",
      },
    ],
    contactEyebrow: "联系",
    contactTitle: "联系悉尼贴瓷砖服务",
    contactText:
      "这里可以放电话、邮箱和服务区域，方便客户直接联系。下面这些内容都可以在站长面板中修改。",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    serviceAreaLabel: "服务区域",
    businessIntroLabel: "宣传文案",
    bestFitLabel: "适合客户",
    ownerEyebrow: "站长面板",
    ownerTitle: "管理网站内容",
    ownerCloseButton: "关闭",
    ownerContentTitle: "双语业务内容",
    ownerContentHint: "建议把中英文内容都填好，这样前台切换语言时会更完整。",
    ownerSharedTitle: "通用联系方式",
    ownerPhoneLabel: "电话",
    ownerEmailLabel: "邮箱",
    ownerEnglishTitle: "英文内容",
    headlineEnLabel: "业务标题（英文）",
    introEnLabel: "业务介绍（英文）",
    serviceAreaEnLabel: "服务区域（英文）",
    customerFitEnLabel: "适合客户（英文，每行一条）",
    ownerChineseTitle: "中文内容",
    headlineZhLabel: "业务标题（中文）",
    introZhLabel: "业务介绍（中文）",
    serviceAreaZhLabel: "服务区域（中文）",
    customerFitZhLabel: "适合客户（中文，每行一条）",
    saveProfileButton: "保存内容",
    uploadSectionTitle: "上传案例图片或视频",
    uploadSectionHint: "如果想让前台始终保持双语展示，建议同时填写中英文标题和说明。",
    mediaTitleEnLabel: "案例标题（英文）",
    mediaTitleZhLabel: "案例标题（中文）",
    mediaCaptionEnLabel: "案例说明（英文）",
    mediaCaptionZhLabel: "案例说明（中文）",
    mediaFileLabel: "选择图片或视频",
    uploadMediaButton: "上传到案例区",
    mediaTitleEnPlaceholder: "例如：North Sydney Bathroom",
    mediaTitleZhPlaceholder: "例如：北悉尼浴室项目",
    mediaCaptionEnPlaceholder: "例如：Large-format grey tiles with refined shower detailing",
    mediaCaptionZhPlaceholder: "例如：大规格灰砖，淋浴区细节收边更整洁",
    galleryTagPhoto: "项目图片",
    galleryTagVideo: "项目视频",
    emptyGallery: "还没有案例内容，打开站长面板即可继续添加图片或视频。",
    ownerEmptyMedia: "上传后的内容会显示在这里。",
    ownerTagBundled: "网站内置素材",
    mediaKindImage: "图片",
    mediaKindVideo: "视频",
    deleteLabel: "删除",
    uploadNeedFile: "请先选择至少一个图片或视频文件。",
    uploadProcessing: "正在处理上传文件...",
    uploadSuccess: "上传完成，页面案例区已更新。",
    uploadError: "上传失败，请换一个文件再试。",
    deleteError: "删除失败，请刷新页面后重试。",
    defaultUploadTitle: "悉尼贴砖项目",
    defaultUploadCaption: "悉尼本地真实贴砖施工案例",
  },
};

const bundledMedia = [
  {
    id: "bundled-442-jpg",
    fileName: "442.JPG",
    kind: "image",
    title: { en: "Bathroom tiling detail 1", zh: "浴室贴砖细节 1" },
    caption: {
      en: "Installed bathroom tiling with neat alignment and practical finish details.",
      zh: "浴室贴砖完成效果，排版整齐，收边处理更实用。",
    },
  },
  {
    id: "bundled-443-jpg",
    fileName: "443.JPG",
    kind: "image",
    title: { en: "Bathroom tiling detail 2", zh: "浴室贴砖细节 2" },
    caption: {
      en: "Residential bathroom work with clean lines and balanced tile layout.",
      zh: "住宅浴室施工案例，线条整齐，瓷砖分布更均衡。",
    },
  },
  {
    id: "bundled-444-jpg",
    fileName: "444.JPG",
    kind: "image",
    title: { en: "Feature wall tile finish", zh: "特色墙面贴砖效果" },
    caption: {
      en: "A closer look at finished tile detail and final presentation.",
      zh: "近距离展示完工后的瓷砖细节和整体呈现效果。",
    },
  },
  {
    id: "bundled-445-jpg",
    fileName: "445.JPG",
    kind: "image",
    title: { en: "Modern bathroom project", zh: "现代浴室项目" },
    caption: {
      en: "Modern bathroom tiling for a renovation or new residential project.",
      zh: "适合翻新或新住宅项目的现代浴室贴砖案例。",
    },
  },
  {
    id: "bundled-447-jpg",
    fileName: "447.JPG",
    kind: "image",
    title: { en: "Shower area tiling", zh: "淋浴区贴砖" },
    caption: {
      en: "Shower-zone tile work focused on tidy corners and finish quality.",
      zh: "淋浴区施工案例，重点体现拐角和收边的整洁度。",
    },
  },
  {
    id: "bundled-450-jpg",
    fileName: "450.JPG",
    kind: "image",
    title: { en: "Kitchen and wet area work", zh: "厨房与湿区施工" },
    caption: {
      en: "Clean tiling suited to kitchens, laundries and wet areas.",
      zh: "适合厨房、laundry 和湿区空间的整洁贴砖效果。",
    },
  },
  {
    id: "bundled-451-jpg",
    fileName: "451.JPG",
    kind: "image",
    title: { en: "Residential renovation tile finish", zh: "住宅翻新贴砖效果" },
    caption: {
      en: "Practical tile upgrade for a residential renovation project in Sydney.",
      zh: "适用于悉尼住宅翻新项目的实用贴砖升级案例。",
    },
  },
  {
    id: "bundled-452-jpg",
    fileName: "452.JPG",
    kind: "image",
    title: { en: "Bathroom floor and wall layout", zh: "浴室地墙砖排版" },
    caption: {
      en: "Balanced wall and floor tile layout designed for everyday use.",
      zh: "地砖与墙砖排版协调，兼顾日常使用和整体观感。",
    },
  },
  {
    id: "bundled-454-jpg",
    fileName: "454.JPG",
    kind: "image",
    title: { en: "Project finish close-up", zh: "完工细节近景" },
    caption: {
      en: "Close-up view of final tile finish and workmanship details.",
      zh: "展示最终贴砖完成面的近景细节和工艺表现。",
    },
  },
  {
    id: "bundled-453-mp4",
    fileName: "453.MP4",
    kind: "video",
    title: { en: "Project walkthrough video 1", zh: "项目视频展示 1" },
    caption: {
      en: "Short walkthrough video showing the completed tiling result on site.",
      zh: "现场短视频，展示贴砖完工后的整体效果。",
    },
  },
  {
    id: "bundled-455-mp4",
    fileName: "455.MP4",
    kind: "video",
    title: { en: "Project walkthrough video 2", zh: "项目视频展示 2" },
    caption: {
      en: "Additional on-site video to show finishing details and layout quality.",
      zh: "补充现场视频，用来展示收边细节和整体排版质量。",
    },
  },
].map((item) => ({
  ...item,
  dataUrl: `./tiles/${item.fileName}`,
  bundled: true,
}));

const state = {
  currentLanguage: loadLanguage(),
  profile: loadProfile(),
  media: [],
  uploadedMedia: [],
  db: null,
};

const els = {
  metaDescription: document.querySelector('meta[name="description"]'),
  navServices: document.querySelector("#navServices"),
  navProjects: document.querySelector("#navProjects"),
  navGallery: document.querySelector("#navGallery"),
  navContact: document.querySelector("#navContact"),
  brandEyebrow: document.querySelector("#brandEyebrow"),
  ownerModeButton: document.querySelector("#ownerModeButton"),
  langEnButton: document.querySelector("#langEnButton"),
  langZhButton: document.querySelector("#langZhButton"),
  heroEyebrow: document.querySelector("#heroEyebrow"),
  heroTitle: document.querySelector("#heroTitle"),
  heroText: document.querySelector("#heroText"),
  heroPrimaryCta: document.querySelector("#heroPrimaryCta"),
  heroSecondaryCta: document.querySelector("#heroSecondaryCta"),
  heroStats: document.querySelector("#heroStats"),
  highlightLabel: document.querySelector("#highlightLabel"),
  highlightList: document.querySelector("#highlightList"),
  showcaseGrid: document.querySelector("#showcaseGrid"),
  servicesEyebrow: document.querySelector("#servicesEyebrow"),
  servicesTitle: document.querySelector("#servicesTitle"),
  servicesText: document.querySelector("#servicesText"),
  serviceGrid: document.querySelector("#serviceGrid"),
  projectsEyebrow: document.querySelector("#projectsEyebrow"),
  projectsTitle: document.querySelector("#projectsTitle"),
  projectList: document.querySelector("#projectList"),
  quoteLabel: document.querySelector("#quoteLabel"),
  quoteList: document.querySelector("#quoteList"),
  galleryEyebrow: document.querySelector("#galleryEyebrow"),
  galleryTitle: document.querySelector("#galleryTitle"),
  galleryText: document.querySelector("#galleryText"),
  galleryNoteTitle: document.querySelector("#galleryNoteTitle"),
  galleryNoteText: document.querySelector("#galleryNoteText"),
  galleryGrid: document.querySelector("#galleryGrid"),
  focusEyebrow: document.querySelector("#focusEyebrow"),
  focusTitle: document.querySelector("#focusTitle"),
  testimonialGrid: document.querySelector("#testimonialGrid"),
  contactEyebrow: document.querySelector("#contactEyebrow"),
  contactTitle: document.querySelector("#contactTitle"),
  contactText: document.querySelector("#contactText"),
  phoneLabel: document.querySelector("#phoneLabel"),
  emailLabel: document.querySelector("#emailLabel"),
  serviceAreaLabel: document.querySelector("#serviceAreaLabel"),
  phoneText: document.querySelector("#phoneText"),
  emailText: document.querySelector("#emailText"),
  serviceAreaText: document.querySelector("#serviceAreaText"),
  phoneLink: document.querySelector("#phoneLink"),
  emailLink: document.querySelector("#emailLink"),
  businessIntroLabel: document.querySelector("#businessIntroLabel"),
  bestFitLabel: document.querySelector("#bestFitLabel"),
  businessHeadline: document.querySelector("#businessHeadline"),
  businessIntro: document.querySelector("#businessIntro"),
  customerFitList: document.querySelector("#customerFitList"),
  ownerDialog: document.querySelector("#ownerDialog"),
  ownerEyebrow: document.querySelector("#ownerEyebrow"),
  ownerTitle: document.querySelector("#ownerTitle"),
  ownerCloseButton: document.querySelector("#ownerCloseButton"),
  ownerContentTitle: document.querySelector("#ownerContentTitle"),
  ownerContentHint: document.querySelector("#ownerContentHint"),
  ownerSharedTitle: document.querySelector("#ownerSharedTitle"),
  ownerPhoneLabel: document.querySelector("#ownerPhoneLabel"),
  ownerEmailLabel: document.querySelector("#ownerEmailLabel"),
  ownerEnglishTitle: document.querySelector("#ownerEnglishTitle"),
  headlineEnLabel: document.querySelector("#headlineEnLabel"),
  introEnLabel: document.querySelector("#introEnLabel"),
  serviceAreaEnLabel: document.querySelector("#serviceAreaEnLabel"),
  customerFitEnLabel: document.querySelector("#customerFitEnLabel"),
  ownerChineseTitle: document.querySelector("#ownerChineseTitle"),
  headlineZhLabel: document.querySelector("#headlineZhLabel"),
  introZhLabel: document.querySelector("#introZhLabel"),
  serviceAreaZhLabel: document.querySelector("#serviceAreaZhLabel"),
  customerFitZhLabel: document.querySelector("#customerFitZhLabel"),
  saveProfileButton: document.querySelector("#saveProfileButton"),
  uploadSectionTitle: document.querySelector("#uploadSectionTitle"),
  uploadSectionHint: document.querySelector("#uploadSectionHint"),
  mediaTitleEnLabel: document.querySelector("#mediaTitleEnLabel"),
  mediaTitleZhLabel: document.querySelector("#mediaTitleZhLabel"),
  mediaCaptionEnLabel: document.querySelector("#mediaCaptionEnLabel"),
  mediaCaptionZhLabel: document.querySelector("#mediaCaptionZhLabel"),
  mediaFileLabel: document.querySelector("#mediaFileLabel"),
  uploadMediaButton: document.querySelector("#uploadMediaButton"),
  headlineEnInput: document.querySelector("#headlineEnInput"),
  introEnInput: document.querySelector("#introEnInput"),
  serviceAreaEnInput: document.querySelector("#serviceAreaEnInput"),
  customerFitEnInput: document.querySelector("#customerFitEnInput"),
  headlineZhInput: document.querySelector("#headlineZhInput"),
  introZhInput: document.querySelector("#introZhInput"),
  serviceAreaZhInput: document.querySelector("#serviceAreaZhInput"),
  customerFitZhInput: document.querySelector("#customerFitZhInput"),
  phoneInput: document.querySelector("#phoneInput"),
  emailInput: document.querySelector("#emailInput"),
  mediaTitleEnInput: document.querySelector("#mediaTitleEnInput"),
  mediaTitleZhInput: document.querySelector("#mediaTitleZhInput"),
  mediaCaptionEnInput: document.querySelector("#mediaCaptionEnInput"),
  mediaCaptionZhInput: document.querySelector("#mediaCaptionZhInput"),
  mediaFileInput: document.querySelector("#mediaFileInput"),
  uploadStatus: document.querySelector("#uploadStatus"),
  ownerMediaList: document.querySelector("#ownerMediaList"),
  galleryItemTemplate: document.querySelector("#galleryItemTemplate"),
};

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadLanguage() {
  const saved = localStorage.getItem(LANG_KEY);
  return saved === "zh" ? "zh" : "en";
}

function getCurrentUi() {
  return uiText[state.currentLanguage];
}

function getLocalizedValue(value) {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    return value[state.currentLanguage] || value.en || value.zh || "";
  }
  return "";
}

function normalizeProfile(parsed) {
  const profile = deepClone(defaultProfile);
  if (!parsed || typeof parsed !== "object") return profile;

  profile.phone = parsed.phone || profile.phone;
  profile.email = parsed.email || profile.email;

  if (parsed.translations) {
    profile.translations.en = {
      ...profile.translations.en,
      ...parsed.translations.en,
      customerFit:
        Array.isArray(parsed.translations.en?.customerFit) && parsed.translations.en.customerFit.length
          ? parsed.translations.en.customerFit
          : profile.translations.en.customerFit,
    };
    profile.translations.zh = {
      ...profile.translations.zh,
      ...parsed.translations.zh,
      customerFit:
        Array.isArray(parsed.translations.zh?.customerFit) && parsed.translations.zh.customerFit.length
          ? parsed.translations.zh.customerFit
          : profile.translations.zh.customerFit,
    };
    return profile;
  }

  const legacyFit = Array.isArray(parsed.customerFit) && parsed.customerFit.length ? parsed.customerFit : null;
  profile.translations.en = {
    ...profile.translations.en,
    headline: parsed.headline || profile.translations.en.headline,
    intro: parsed.intro || profile.translations.en.intro,
    serviceArea: parsed.serviceArea || profile.translations.en.serviceArea,
    customerFit: legacyFit || profile.translations.en.customerFit,
  };
  profile.translations.zh = {
    ...profile.translations.zh,
    headline: parsed.headline || profile.translations.zh.headline,
    intro: parsed.intro || profile.translations.zh.intro,
    serviceArea: parsed.serviceArea || profile.translations.zh.serviceArea,
    customerFit: legacyFit || profile.translations.zh.customerFit,
  };
  return profile;
}

function loadProfile() {
  try {
    const saved = localStorage.getItem(PROFILE_KEY);
    if (!saved) return deepClone(defaultProfile);
    return normalizeProfile(JSON.parse(saved));
  } catch {
    return deepClone(defaultProfile);
  }
}

function saveProfile() {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(state.profile));
}

function renderLanguageButtons() {
  els.langEnButton.classList.toggle("active", state.currentLanguage === "en");
  els.langZhButton.classList.toggle("active", state.currentLanguage === "zh");
}

function renderStats(items) {
  els.heroStats.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<strong>${item.label}</strong><span>${item.text}</span>`;
    els.heroStats.appendChild(card);
  });
}

function renderHighlightList(items) {
  els.highlightList.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.highlightList.appendChild(li);
  });
}

function renderShowcaseCards(cards) {
  els.showcaseGrid.innerHTML = "";
  cards.forEach((cardData) => {
    const card = document.createElement("article");
    card.className = `mini-card ${cardData.tone}`;
    card.innerHTML = `<span>${cardData.label}</span><strong>${cardData.title}</strong>`;
    els.showcaseGrid.appendChild(card);
  });
}

function renderServiceCards(cards) {
  els.serviceGrid.innerHTML = "";
  cards.forEach((cardData) => {
    const card = document.createElement("article");
    card.className = "service-card";
    card.innerHTML = `<h3>${cardData.title}</h3><p>${cardData.text}</p>`;
    els.serviceGrid.appendChild(card);
  });
}

function renderProjectCards(cards) {
  els.projectList.innerHTML = "";
  cards.forEach((cardData) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `<h3>${cardData.title}</h3><p>${cardData.text}</p>`;
    els.projectList.appendChild(card);
  });
}

function renderQuoteSteps(steps) {
  els.quoteList.innerHTML = "";
  steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    els.quoteList.appendChild(li);
  });
}

function renderFocusCards(cards) {
  els.testimonialGrid.innerHTML = "";
  cards.forEach((cardData) => {
    const card = document.createElement("article");
    card.className = "testimonial-card";
    card.innerHTML = `<strong>${cardData.title}</strong><p>${cardData.text}</p>`;
    els.testimonialGrid.appendChild(card);
  });
}

function renderProfile() {
  const profileTranslation = state.profile.translations[state.currentLanguage];
  els.phoneText.textContent = state.profile.phone;
  els.emailText.textContent = state.profile.email;
  els.serviceAreaText.textContent = profileTranslation.serviceArea;
  els.phoneLink.href = `tel:${state.profile.phone.replace(/\s+/g, "")}`;
  els.emailLink.href = `mailto:${state.profile.email}`;
  els.businessHeadline.textContent = profileTranslation.headline;
  els.businessIntro.textContent = profileTranslation.intro;
  els.customerFitList.innerHTML = "";
  profileTranslation.customerFit.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.customerFitList.appendChild(li);
  });
}

function fillOwnerForm() {
  els.phoneInput.value = state.profile.phone;
  els.emailInput.value = state.profile.email;
  els.headlineEnInput.value = state.profile.translations.en.headline;
  els.introEnInput.value = state.profile.translations.en.intro;
  els.serviceAreaEnInput.value = state.profile.translations.en.serviceArea;
  els.customerFitEnInput.value = state.profile.translations.en.customerFit.join("\n");
  els.headlineZhInput.value = state.profile.translations.zh.headline;
  els.introZhInput.value = state.profile.translations.zh.intro;
  els.serviceAreaZhInput.value = state.profile.translations.zh.serviceArea;
  els.customerFitZhInput.value = state.profile.translations.zh.customerFit.join("\n");
}

function applyStaticContent() {
  const ui = getCurrentUi();
  document.documentElement.lang = ui.htmlLang;
  document.title = ui.title;
  els.metaDescription.setAttribute("content", ui.metaDescription);

  const textMap = {
    brandEyebrow: ui.brandEyebrow,
    navServices: ui.navServices,
    navProjects: ui.navProjects,
    navGallery: ui.navGallery,
    navContact: ui.navContact,
    ownerModeButton: ui.ownerModeButton,
    heroEyebrow: ui.heroEyebrow,
    heroTitle: ui.heroTitle,
    heroText: ui.heroText,
    heroPrimaryCta: ui.heroPrimaryCta,
    heroSecondaryCta: ui.heroSecondaryCta,
    highlightLabel: ui.highlightLabel,
    servicesEyebrow: ui.servicesEyebrow,
    servicesTitle: ui.servicesTitle,
    servicesText: ui.servicesText,
    projectsEyebrow: ui.projectsEyebrow,
    projectsTitle: ui.projectsTitle,
    quoteLabel: ui.quoteLabel,
    galleryEyebrow: ui.galleryEyebrow,
    galleryTitle: ui.galleryTitle,
    galleryText: ui.galleryText,
    galleryNoteTitle: ui.galleryNoteTitle,
    galleryNoteText: ui.galleryNoteText,
    focusEyebrow: ui.focusEyebrow,
    focusTitle: ui.focusTitle,
    contactEyebrow: ui.contactEyebrow,
    contactTitle: ui.contactTitle,
    contactText: ui.contactText,
    phoneLabel: ui.phoneLabel,
    emailLabel: ui.emailLabel,
    serviceAreaLabel: ui.serviceAreaLabel,
    businessIntroLabel: ui.businessIntroLabel,
    bestFitLabel: ui.bestFitLabel,
    ownerEyebrow: ui.ownerEyebrow,
    ownerTitle: ui.ownerTitle,
    ownerCloseButton: ui.ownerCloseButton,
    ownerContentTitle: ui.ownerContentTitle,
    ownerContentHint: ui.ownerContentHint,
    ownerSharedTitle: ui.ownerSharedTitle,
    ownerPhoneLabel: ui.ownerPhoneLabel,
    ownerEmailLabel: ui.ownerEmailLabel,
    ownerEnglishTitle: ui.ownerEnglishTitle,
    headlineEnLabel: ui.headlineEnLabel,
    introEnLabel: ui.introEnLabel,
    serviceAreaEnLabel: ui.serviceAreaEnLabel,
    customerFitEnLabel: ui.customerFitEnLabel,
    ownerChineseTitle: ui.ownerChineseTitle,
    headlineZhLabel: ui.headlineZhLabel,
    introZhLabel: ui.introZhLabel,
    serviceAreaZhLabel: ui.serviceAreaZhLabel,
    customerFitZhLabel: ui.customerFitZhLabel,
    saveProfileButton: ui.saveProfileButton,
    uploadSectionTitle: ui.uploadSectionTitle,
    uploadSectionHint: ui.uploadSectionHint,
    mediaTitleEnLabel: ui.mediaTitleEnLabel,
    mediaTitleZhLabel: ui.mediaTitleZhLabel,
    mediaCaptionEnLabel: ui.mediaCaptionEnLabel,
    mediaCaptionZhLabel: ui.mediaCaptionZhLabel,
    mediaFileLabel: ui.mediaFileLabel,
    uploadMediaButton: ui.uploadMediaButton,
  };

  Object.entries(textMap).forEach(([key, value]) => {
    els[key].textContent = value;
  });

  els.mediaTitleEnInput.placeholder = ui.mediaTitleEnPlaceholder;
  els.mediaTitleZhInput.placeholder = ui.mediaTitleZhPlaceholder;
  els.mediaCaptionEnInput.placeholder = ui.mediaCaptionEnPlaceholder;
  els.mediaCaptionZhInput.placeholder = ui.mediaCaptionZhPlaceholder;

  renderLanguageButtons();
  renderStats(ui.heroStats);
  renderHighlightList(ui.highlightItems);
  renderShowcaseCards(ui.showcaseCards);
  renderServiceCards(ui.servicesCards);
  renderProjectCards(ui.projectCards);
  renderQuoteSteps(ui.quoteSteps);
  renderFocusCards(ui.focusCards);
  renderProfile();
  renderGallery();
  renderOwnerMediaList();
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

function tx(mode) {
  return state.db.transaction(STORE_NAME, mode).objectStore(STORE_NAME);
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function syncMedia() {
  state.media = [...state.uploadedMedia, ...bundledMedia];
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

function createMediaNode(item) {
  const wrapper = document.createElement("div");
  if (item.kind === "video") {
    const video = document.createElement("video");
    video.src = item.dataUrl;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    wrapper.appendChild(video);
  } else {
    const image = document.createElement("img");
    image.src = item.dataUrl;
    image.alt = getLocalizedValue(item.title);
    wrapper.appendChild(image);
  }
  return wrapper.firstChild;
}

function renderGallery() {
  const ui = getCurrentUi();
  els.galleryGrid.innerHTML = "";
  if (!state.media.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = ui.emptyGallery;
    els.galleryGrid.appendChild(empty);
    return;
  }

  state.media.forEach((item) => {
    const fragment = els.galleryItemTemplate.content.cloneNode(true);
    fragment.querySelector(".gallery-media").appendChild(createMediaNode(item));
    fragment.querySelector(".gallery-tag").textContent =
      item.kind === "video" ? ui.galleryTagVideo : ui.galleryTagPhoto;
    fragment.querySelector(".gallery-title").textContent = getLocalizedValue(item.title);
    fragment.querySelector(".gallery-caption").textContent = getLocalizedValue(item.caption);
    els.galleryGrid.appendChild(fragment);
  });
}

function renderOwnerMediaList() {
  const ui = getCurrentUi();
  els.ownerMediaList.innerHTML = "";
  if (!state.media.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = ui.ownerEmptyMedia;
    els.ownerMediaList.appendChild(empty);
    return;
  }

  state.media.forEach((item) => {
    const row = document.createElement("div");
    row.className = "owner-media-item";
    const kindLabel = item.kind === "video" ? ui.mediaKindVideo : ui.mediaKindImage;
    const actionMarkup = item.bundled
      ? `<span class="owner-tag">${ui.ownerTagBundled}</span>`
      : `<button class="ghost-btn delete-upload-button" type="button" data-id="${item.id}">${ui.deleteLabel}</button>`;
    row.innerHTML = `
      <div class="owner-media-meta">
        <strong>${getLocalizedValue(item.title)}</strong>
        <span>${kindLabel} · ${item.fileName || "custom upload"}</span>
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
  const ui = getCurrentUi();
  const files = [...els.mediaFileInput.files];
  if (!files.length) {
    els.uploadStatus.textContent = ui.uploadNeedFile;
    return;
  }

  const titleEn = els.mediaTitleEnInput.value.trim() || uiText.en.defaultUploadTitle;
  const titleZh = els.mediaTitleZhInput.value.trim() || uiText.zh.defaultUploadTitle;
  const captionEn = els.mediaCaptionEnInput.value.trim() || uiText.en.defaultUploadCaption;
  const captionZh = els.mediaCaptionZhInput.value.trim() || uiText.zh.defaultUploadCaption;

  els.uploadStatus.textContent = ui.uploadProcessing;

  for (const [index, file] of files.entries()) {
    const dataUrl = await fileToDataUrl(file);
    const suffix = files.length === 1 ? "" : ` ${index + 1}`;
    const mediaItem = {
      id: `${Date.now()}-${index}-${Math.random().toString(16).slice(2, 8)}`,
      title: {
        en: `${titleEn}${suffix}`,
        zh: `${titleZh}${suffix}`,
      },
      caption: {
        en: captionEn,
        zh: captionZh,
      },
      kind: file.type.startsWith("video/") ? "video" : "image",
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
  els.mediaTitleEnInput.value = "";
  els.mediaTitleZhInput.value = "";
  els.mediaCaptionEnInput.value = "";
  els.mediaCaptionZhInput.value = "";
  els.uploadStatus.textContent = ui.uploadSuccess;
}

function parseLines(value, fallback) {
  const list = value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
  return list.length ? list : fallback;
}

function saveProfileFromInputs() {
  state.profile = {
    phone: els.phoneInput.value.trim() || defaultProfile.phone,
    email: els.emailInput.value.trim() || defaultProfile.email,
    translations: {
      en: {
        headline: els.headlineEnInput.value.trim() || defaultProfile.translations.en.headline,
        intro: els.introEnInput.value.trim() || defaultProfile.translations.en.intro,
        serviceArea: els.serviceAreaEnInput.value.trim() || defaultProfile.translations.en.serviceArea,
        customerFit: parseLines(
          els.customerFitEnInput.value,
          defaultProfile.translations.en.customerFit
        ),
      },
      zh: {
        headline: els.headlineZhInput.value.trim() || defaultProfile.translations.zh.headline,
        intro: els.introZhInput.value.trim() || defaultProfile.translations.zh.intro,
        serviceArea: els.serviceAreaZhInput.value.trim() || defaultProfile.translations.zh.serviceArea,
        customerFit: parseLines(
          els.customerFitZhInput.value,
          defaultProfile.translations.zh.customerFit
        ),
      },
    },
  };
  saveProfile();
  renderProfile();
}

function setLanguage(language) {
  state.currentLanguage = language === "zh" ? "zh" : "en";
  localStorage.setItem(LANG_KEY, state.currentLanguage);
  applyStaticContent();
}

function bindEvents() {
  els.langEnButton.addEventListener("click", () => setLanguage("en"));
  els.langZhButton.addEventListener("click", () => setLanguage("zh"));

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
      els.uploadStatus.textContent = getCurrentUi().uploadError;
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.dataset.id) return;
    if (!target.matches(".delete-upload-button")) return;
    deleteMedia(target.dataset.id).catch(() => {
      els.uploadStatus.textContent = getCurrentUi().deleteError;
    });
  });
}

async function init() {
  fillOwnerForm();
  bindEvents();
  applyStaticContent();
  try {
    state.db = await openDb();
  } catch {
    state.db = null;
  }
  await loadMedia();
}

init();
