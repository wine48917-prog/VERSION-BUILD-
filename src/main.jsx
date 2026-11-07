import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Code2,
  Sparkles,
  FolderKanban,
  Bug,
  BookOpen,
  Settings,
  MessageCircle,
  Plus,
  Search,
  Bell,
  Menu,
  X,
  Send,
  ChevronLeft,
  LayoutDashboard,
  WandSparkles,
  Terminal,
  User,
  LogOut,
  Eye,
  Moon,
  Sun,
  ArrowUp,
  FileCode2,
  Cpu,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";

import "./style.css";

function App() {
  const [page, setPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showAuth, setShowAuth] = useState(true);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);

  const navigation = [
    { id: "dashboard", label: "الرئيسية", icon: LayoutDashboard },
    { id: "builder", label: "AI Builder", icon: WandSparkles },
    { id: "editor", label: "AI Editor", icon: Code2 },
    { id: "explainer", label: "AI Explainer", icon: BookOpen },
    { id: "debugger", label: "AI Debugger", icon: Bug },
    { id: "projects", label: "مشاريعي", icon: FolderKanban },
  ];

  const features = [
    {
      id: "builder",
      icon: WandSparkles,
      title: "AI Builder",
      description: "حوّل فكرتك إلى مشروع برمجي من خلال وصف بسيط.",
      color: "purple",
    },
    {
      id: "editor",
      icon: Code2,
      title: "AI Editor",
      description: "اكتب وعدّل الأكواد داخل بيئة تطوير منظمة.",
      color: "blue",
    },
    {
      id: "explainer",
      icon: BookOpen,
      title: "AI Explainer",
      description: "افهم الأكواد البرمجية خطوة بخطوة.",
      color: "green",
    },
    {
      id: "debugger",
      icon: Bug,
      title: "AI Debugger",
      description: "حلّل الأخطاء البرمجية وساعد في إصلاحها.",
      color: "orange",
    },
  ];

  function handleLogin(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("من فضلك أدخل البريد الإلكتروني وكلمة المرور.");
      return;
    }

    setUser(email.split("@")[0]);
    setShowAuth(false);
  }

  function handleCreateProject() {
    if (!projectName.trim()) return;

    const newProject = {
      id: Date.now(),
      name: projectName,
      date: new Date().toLocaleDateString("ar-EG"),
    };

    setProjects((old) => [newProject, ...old]);
    setProjectName("");
    setPage("projects");
  }

  function handleSendMessage(e) {
    e.preventDefault();

    if (!message.trim()) return;

    setMessages((old) => [
      ...old,
      {
        id: Date.now(),
        text: message,
        sender: "user",
      },
    ]);

    setMessage("");
  }

  function handleBuilder(e) {
    e.preventDefault();

    if (!prompt.trim()) return;

    setPage("builder");
  }

  function logout() {
    setShowAuth(true);
    setUser("");
    setEmail("");
    setPassword("");
  }

  const Icon = ({ icon: Component, size = 20 }) => (
    <Component size={size} strokeWidth={1.8} />
  );

  if (showAuth) {
    return (
      <main className={`auth-screen ${darkMode ? "dark" : "light"}`}>
        <div className="auth-decoration decoration-one"></div>
        <div className="auth-decoration decoration-two"></div>

        <section className="auth-card">
          <div className="brand auth-brand">
            <div className="brand-icon">
              <Code2 size={25} />
            </div>

            <div>
              <h1>VERSION BUILD</h1>
              <span>CODE. CREATE. EVOLVE.</span>
            </div>
          </div>

          <div className="auth-heading">
            <span className="eyebrow">WELCOME TO THE FUTURE</span>

            <h2>
              {authMode === "login"
                ? "مرحباً بعودتك"
                : authMode === "register"
                ? "أنشئ حسابك الجديد"
                : "استعادة كلمة المرور"}
            </h2>

            <p>ابدأ رحلتك في عالم تطوير البرمجيات بالذكاء الاصطناعي.</p>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            {authMode === "register" && (
              <label>
                اسم المستخدم
                <input
                  type="text"
                  placeholder="اسمك"
                  required
                />
              </label>
            )}

            <label>
              البريد الإلكتروني
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            {authMode !== "forgot" && (
              <label>
                كلمة المرور
                <input
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            )}

            {authMode === "login" && (
              <button
                type="button"
                className="forgot-link"
                onClick={() => setAuthMode("forgot")}
              >
                نسيت كلمة المرور؟
              </button>
            )}

            <button className="primary-button auth-submit" type="submit">
              {authMode === "login"
                ? "تسجيل الدخول"
                : authMode === "register"
                ? "إنشاء الحساب"
                : "إرسال رابط الاستعادة"}
              <ChevronLeft size={18} />
            </button>
          </form>

          <div className="auth-switch">
            {authMode === "login" ? (
              <>
                ليس لديك حساب؟
                <button onClick={() => setAuthMode("register")}>
                  إنشاء حساب
                </button>
              </>
            ) : (
              <>
                لديك حساب بالفعل؟
                <button onClick={() => setAuthMode("login")}>
                  تسجيل الدخول
                </button>
              </>
            )}
          </div>

          <div className="auth-footer">
            <ShieldCheck size={15} />
            <span>VERSION BUILD · منصة تطوير برمجيات</span>
          </div>
        </section>
      </main>
    );
  }

  return (
    <div className={`app-shell ${darkMode ? "dark" : "light"}`}>
      {sidebarOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">
            <Code2 size={24} />
          </div>

          <div>
            <h2>VERSION BUILD</h2>
            <span>DEVELOPMENT PLATFORM</span>
          </div>

          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="workspace">
          <div className="workspace-icon">
            <Cpu size={19} />
          </div>

          <div>
            <strong>مساحة العمل</strong>
            <span>Personal Workspace</span>
          </div>

          <ChevronLeft size={16} />
        </div>

        <div className="nav-title">القائمة الرئيسية</div>

        <nav className="navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${page === item.id ? "active" : ""}`}
              onClick={() => {
                setPage(item.id);
                setSidebarOpen(false);
              }}
            >
              <Icon icon={item.icon} />
              <span>{item.label}</span>
              {page === item.id && <span className="active-dot"></span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="nav-title">الإعدادات</div>

          <button
            className="nav-item"
            onClick={() => setPage("settings")}
          >
            <Settings size={19} />
            <span>الإعدادات</span>
          </button>

          <button
            className="nav-item"
            onClick={() => setChatOpen(true)}
          >
            <MessageCircle size={19} />
            <span>الدعم الفني</span>
          </button>

          <div className="user-profile">
            <div className="avatar">
              <User size={20} />
            </div>

            <div className="user-details">
              <strong>{user || "مستخدم VERSION"}</strong>
              <span>Free Account</span>
            </div>

            <button className="logout-button" onClick={logout}>
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-right">
            <button
              className="icon-button mobile-menu"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={21} />
            </button>

            <div className="breadcrumb">
              <span>VERSION BUILD</span>
              <ChevronLeft size={15} />
              <strong>
                {navigation.find((item) => item.id === page)?.label ||
                  "الإعدادات"}
              </strong>
            </div>
          </div>

          <div className="topbar-actions">
            <button
              className="icon-button"
              onClick={() => setDarkMode(!darkMode)}
              title="تغيير المظهر"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button className="icon-button notification-button">
              <Bell size={19} />
            </button>

            <div className="topbar-avatar">
              <User size={18} />
            </div>
          </div>
        </header>

        <div className="page-content">
          {page === "dashboard" && (
            <>
              <section className="welcome-section">
                <div>
                  <span className="eyebrow">
                    <Sparkles size={14} /> YOUR AI DEVELOPMENT SPACE
                  </span>

                  <h1>
                    أهلاً بك في <span>VERSION BUILD</span>
                  </h1>

                  <p>
                    حوّل أفكارك إلى مشاريع حقيقية. ابدأ البناء والتطوير
                    باستخدام أدوات الذكاء الاصطناعي.
                  </p>
                </div>

                <div className="welcome-decoration">
                  <Code2 size={78} strokeWidth={1} />
                  <div className="decoration-glow"></div>
                </div>
              </section>

              <section className="quick-stats">
                <div className="stat-card">
                  <div className="stat-icon purple">
                    <FolderKanban size={21} />
                  </div>
                  <div>
                    <span>إجمالي المشاريع</span>
                    <strong>{projects.length}</strong>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon blue">
                    <Code2 size={21} />
                  </div>
                  <div>
                    <span>أدوات التطوير</span>
                    <strong>04</strong>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon green">
                    <Zap size={21} />
                  </div>
                  <div>
                    <span>حالة المنصة</span>
                    <strong className="status-text">جاهزة</strong>
                  </div>
                </div>
              </section>

              <section className="builder-banner">
                <div className="builder-content">
                  <span className="banner-label">
                    <Sparkles size={14} /> AI POWERED BUILDER
                  </span>

                  <h2>ما الذي تريد بناءه اليوم؟</h2>

                  <p>
                    اكتب وصف مشروعك، وابدأ تحويل فكرتك إلى تجربة برمجية.
                  </p>

                  <form className="builder-input" onSubmit={handleBuilder}>
                    <input
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="مثلاً: أريد إنشاء متجر إلكتروني..."
                    />

                    <button type="submit">
                      <ArrowUp size={20} />
                    </button>
                  </form>
                </div>

                <div className="banner-art">
                  <WandSparkles size={90} strokeWidth={1} />
                </div>
              </section>

              <section className="section-block">
                <div className="section-heading">
                  <div>
                    <h2>أدوات التطوير</h2>
                    <p>كل ما تحتاجه في مكان واحد.</p>
                  </div>

                  <button
                    className="text-button"
                    onClick={() => setPage("builder")}
                  >
                    استكشف الأدوات <ChevronLeft size={16} />
                  </button>
                </div>

                <div className="features-grid">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      className="feature-card"
                      onClick={() => setPage(feature.id)}
                    >
                      <div className={`feature-icon ${feature.color}`}>
                        <Icon icon={feature.icon} size={23} />
                      </div>

                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>

                      <div className="feature-link">
                        فتح الأداة <ChevronLeft size={15} />
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              <section className="section-block">
                <div className="section-heading">
                  <div>
                    <h2>مشاريعك الأخيرة</h2>
                    <p>تابع أعمالك من مكان واحد.</p>
                  </div>

                  <button
                    className="secondary-button"
                    onClick={() => setPage("projects")}
                  >
                    عرض الكل
                  </button>
                </div>

                {projects.length === 0 ? (
                  <div className="empty-state">
                    <FolderKanban size={35} />
                    <strong>لا توجد مشاريع حتى الآن</strong>
                    <span>ابدأ بإنشاء أول مشروع لك.</span>
                    <button
                      className="primary-button"
                      onClick={() => setPage("projects")}
                    >
                      <Plus size={17} /> إنشاء مشروع
                    </button>
                  </div>
                ) : (
                  <div className="projects-grid">
                    {projects.slice(0, 3).map((project) => (
                      <div className="project-card" key={project.id}>
                        <FileCode2 size={24} />
                        <strong>{project.name}</strong>
                        <span>{project.date}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </>
          )}

          {page === "builder" && (
            <section className="tool-page">
              <div className="tool-heading">
                <div className="large-tool-icon purple">
                  <WandSparkles size={30} />
                </div>
                <span className="eyebrow">AI DEVELOPMENT TOOL</span>
                <h1>AI Builder</h1>
                <p>حوّل وصف فكرتك إلى مشروع برمجي منظم.</p>
              </div>

              <div className="tool-panel">
                <label>صف المشروع الذي تريد بناءه</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="اشرح فكرتك بالتفصيل... ما نوع الموقع أو التطبيق؟ وما المميزات التي تحتاجها؟"
                />

                <div className="tool-panel-footer">
                  <span>اكتب وصفًا واضحًا للحصول على نتيجة أفضل.</span>
                  <button
                    className="primary-button"
                    onClick={() =>
                      alert("واجهة AI Builder جاهزة، وسيتم ربط محرك الذكاء الاصطناعي في المرحلة القادمة.")
                    }
                  >
                    <Sparkles size={17} /> إنشاء المشروع
                  </button>
                </div>
              </div>
            </section>
          )}

          {page === "editor" && (
            <section className="tool-page">
              <div className="tool-heading">
                <div className="large-tool-icon blue">
                  <Code2 size={30} />
                </div>
                <span className="eyebrow">CODE DEVELOPMENT</span>
                <h1>AI Editor</h1>
                <p>بيئة مخصصة لكتابة وتعديل الأكواد البرمجية.</p>
              </div>

              <div className="coming-soon">
                <Terminal size={42} />
                <h2>محرر الأكواد قيد التجهيز</h2>
                <p>نعمل على تجهيز بيئة تحرير أكواد متكاملة.</p>
              </div>
            </section>
          )}

          {page === "explainer" && (
            <section className="tool-page">
              <div className="tool-heading">
                <div className="large-tool-icon green">
                  <BookOpen size={30} />
                </div>
                <span className="eyebrow">CODE UNDERSTANDING</span>
                <h1>AI Explainer</h1>
                <p>افهم أي كود برمجي بطريقة بسيطة ومنظمة.</p>
              </div>

              <div className="tool-panel">
                <label>ضع الكود الذي تريد شرحه</label>
                <textarea placeholder="الصق الكود البرمجي هنا..." />

                <button
                  className="primary-button"
                  onClick={() =>
                    alert("سيتم ربط أداة شرح الأكواد بمحرك الذكاء الاصطناعي.")
                  }
                >
                  <Sparkles size={17} /> شرح الكود
                </button>
              </div>
            </section>
          )}

          {page === "debugger" && (
            <section className="tool-page">
              <div className="tool-heading">
                <div className="large-tool-icon orange">
                  <Bug size={30} />
                </div>
                <span className="eyebrow">ERROR ANALYSIS</span>
                <h1>AI Debugger</h1>
                <p>حلّل الأخطاء البرمجية واكتشف أسبابها.</p>
              </div>

              <div className="tool-panel">
                <label>الصق الكود أو رسالة الخطأ</label>
                <textarea placeholder="ضع الكود أو رسالة الخطأ هنا..." />

                <button
                  className="primary-button"
                  onClick={() =>
                    alert("سيتم ربط أداة اكتشاف الأخطاء بمحرك الذكاء الاصطناعي.")
                  }
                >
                  <Bug size={17} /> تحليل
                              </section>
          )}

          {page === "projects" && (
            <section className="tool-page">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">YOUR WORKSPACE</span>
                  <h1>مشاريعي</h1>
                  <p>إدارة وتنظيم مشاريعك البرمجية.</p>
                </div>
              </div>

              <div className="create-project-panel">
                <div className="create-project-icon">
                  <Plus size={24} />
                </div>

                <div>
                  <h3>إنشاء مشروع جديد</h3>
                  <p>ابدأ مشروعًا جديدًا داخل مساحة العمل.</p>
                </div>

                <div className="create-project-input">
                  <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="اسم المشروع..."
                  />

                  <button
                    className="primary-button"
                    onClick={handleCreateProject}
                  >
                    <Plus size={17} /> إنشاء
                  </button>
                </div>
              </div>

              <div className="projects-list">
                {projects.length === 0 ? (
                  <div className="empty-state">
                    <FolderKanban size={35} />
                    <strong>مساحة العمل فارغة</strong>
                    <span>أنشئ مشروعك الأول للبدء.</span>
                  </div>
                ) : (
                  projects.map((project) => (
                    <div className="project-row" key={project.id}>
                      <div className="project-row-icon">
                        <FileCode2 size={22} />
                      </div>

                      <div>
                        <strong>{project.name}</strong>
                        <span>تاريخ الإنشاء: {project.date}</span>
                      </div>

                      <button className="icon-button">
                        <Eye size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </section>
          )}

          {page === "settings" && (
            <section className="tool-page">
              <div className="tool-heading">
                <div className="large-tool-icon purple">
                  <Settings size={30} />
                </div>
                <h1>الإعدادات</h1>
                <p>إدارة تفضيلات حسابك ومساحة العمل.</p>
              </div>

              <div className="settings-panel">
                <div className="setting-row">
                  <div>
                    <strong>المظهر</strong>
                    <span>تغيير المظهر بين الوضع الداكن والفاتح.</span>
                  </div>

                  <button
                    className="secondary-button"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    {darkMode ? <Sun size={17} /> : <Moon size={17} />}
                    {darkMode ? "الوضع الفاتح" : "الوضع الداكن"}
                  </button>
                </div>

                <div className="setting-row">
                  <div>
                    <strong>الدعم الفني</strong>
                    <span>تواصل مع فريق الدعم.</span>
                  </div>

                  <button
                    className="secondary-button"
                    onClick={() => setChatOpen(true)}
                  >
                    <MessageCircle size={17} /> فتح المحادثة
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>

        <footer className="app-footer">
          <div className="footer-brand">
            <Code2 size={17} />
            <strong>VERSION BUILD</strong>
          </div>

          <span>CODE. CREATE. EVOLVE.</span>
          <span>© 2026 VERSION BUILD</span>
        </footer>
      </main>

      {chatOpen && (
        <div className="support-window">
          <div className="support-header">
            <div className="support-avatar">
              <MessageCircle size={20} />
            </div>

            <div>
              <strong>الدعم الفني</strong>
              <span>
                <span className="online-dot"></span> متاح للمساعدة
              </span>
            </div>

            <button
              className="icon-button"
              onClick={() => setChatOpen(false)}
            >
              <X size={19} />
            </button>
          </div>

          <div className="support-messages">
            <div className="support-welcome">
              <Sparkles size={24} />
              <strong>أهلاً بك في VERSION BUILD</strong>
              <p>اكتب رسالتك وسنساعدك في أقرب وقت.</p>
            </div>

            {messages.map((item) => (
              <div className="chat-message user-message" key={item.id}>
                {item.text}
              </div>
            ))}
          </div>

          <form className="support-input" onSubmit={handleSendMessage}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالتك..."
            />

            <button type="submit">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <div className="mobile-bottom-bar">
        <button onClick={() => setPage("dashboard")}>
          <LayoutDashboard size={19} />
          <span>الرئيسية</span>
        </button>

        <button onClick={() => setPage("builder")}>
          <WandSparkles size={19} />
          <span>Builder</span>
        </button>

        <button onClick={() => setPage("projects")}>
          <FolderKanban size={19} />
          <span>مشاريعي</span>
        </button>

        <button onClick={() => setChatOpen(true)}>
          <MessageCircle size={19} />
          <span>الدعم</span>
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
