import { useState } from "react";
import {
  QrCode,
  LayoutDashboard,
  Wallet,
  UtensilsCrossed,
  ArrowRight,
  ChevronRight,
  Check,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  FileText,
  Loader2,
  Star,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

// ─── Google Icon (SVG, not in lucide) ───────────────────────────────────────
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const CUISINE_TAGS = ["Nepali", "Newari", "Indian", "Chinese", "Continental", "Cafe", "Fast food", "Momo", "Thakali"];
const PAYMENT_TAGS = ["Cash", "eSewa", "Khalti", "ConnectIPS", "IME Pay"];

const FEATURES = [
  { icon: QrCode,          title: "QR Menu",       desc: "Customers scan, order & pay from their phones — zero contact." },
  { icon: LayoutDashboard, title: "Live Dashboard", desc: "Real-time order management for your kitchen and staff." },
  { icon: Wallet,          title: "Easy Payments",  desc: "eSewa, Khalti, ConnectIPS, and cash — all in one place." },
  { icon: UtensilsCrossed, title: "Menu Control",   desc: "Update items, prices, and availability in seconds." },
];

const STATS = [
  { value: "500+", label: "Restaurants" },
  { value: "1.2L+", label: "Orders/month" },
  { value: "4.9★", label: "Avg rating" },
];

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────

function Navbar({ page, setPage }) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur border-b border-stone-100">
      <button onClick={() => setPage("landing")} className="text-[17px] font-semibold tracking-tight text-stone-900">
        swad<span className="text-amber-600">sadan</span>
      </button>
      <div className="flex items-center gap-2">
        {page !== "login" && (
          <button
            onClick={() => setPage("login")}
            className="px-4 py-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            Sign in
          </button>
        )}
        {page !== "signup" && (
          <button
            onClick={() => setPage("signup")}
            className="px-4 py-2 text-sm font-medium bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
          >
            Get started
          </button>
        )}
      </div>
    </nav>
  );
}

function Breadcrumb({ crumbs, setPage }) {
  return (
    <div className="flex items-center gap-1.5 px-6 pt-4 text-xs text-stone-400">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={12} className="text-stone-300" />}
          {c.page ? (
            <button onClick={() => setPage(c.page)} className="hover:text-amber-600 transition-colors">
              {c.label}
            </button>
          ) : (
            <span className="text-stone-700 font-medium">{c.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

function InputField({ label, type = "text", placeholder, icon: Icon, value, onChange }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-stone-600">{label}</label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
            <Icon size={15} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full ${Icon ? "pl-9" : "pl-3"} pr-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 text-stone-900 placeholder:text-stone-400 transition`}
        />
      </div>
    </div>
  );
}

function GoogleButton({ label }) {
  return (
    <button className="w-full flex items-center justify-center gap-3 py-2.5 border border-stone-200 rounded-lg text-sm font-medium text-stone-700 bg-white hover:bg-stone-50 transition-colors shadow-sm">
      <GoogleIcon />
      {label}
    </button>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-stone-100" />
      <span className="text-xs text-stone-400 font-medium">or continue with email</span>
      <div className="flex-1 h-px bg-stone-100" />
    </div>
  );
}

function TagSelector({ options, selected, onToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((tag) => (
        <button
          key={tag}
          onClick={() => onToggle(tag)}
          className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
            selected.includes(tag)
              ? "bg-amber-50 border-amber-400 text-amber-700 font-medium"
              : "bg-white border-stone-200 text-stone-500 hover:border-stone-300"
          }`}
        >
          {selected.includes(tag) && <span className="mr-1">✓</span>}
          {tag}
        </button>
      ))}
    </div>
  );
}

// ─── PAGE: LANDING ────────────────────────────────────────────────────────────
function LandingPage({ setPage }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full translate-y-1/2 -translate-x-1/4 opacity-50" />
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-700">
            <Star size={11} fill="currentColor" />
            Trusted by 500+ restaurants in Nepal
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-6">
            Your restaurant,
            <br />
            <span className="text-amber-600">fully digital</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-xl mx-auto leading-relaxed mb-10">
            QR-based ordering, real-time kitchen dashboard, and seamless payments —
            everything your restaurant needs in one platform.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <button
              onClick={() => setPage("signup")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-amber-200"
            >
              Start for free
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setPage("login")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-stone-200 text-stone-700 text-sm font-medium rounded-xl hover:bg-stone-50 transition-colors"
            >
              Sign in to dashboard
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-stone-900">{s.value}</div>
                <div className="text-xs text-stone-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Everything you need</h2>
          <p className="text-stone-500 text-sm">One platform, all the tools</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 rounded-2xl border border-stone-100 bg-stone-50 hover:border-amber-200 hover:bg-amber-50/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-stone-100 flex items-center justify-center mb-4 group-hover:border-amber-200 transition-colors shadow-sm">
                <Icon size={18} className="text-amber-600" />
              </div>
              <h3 className="text-sm font-semibold text-stone-800 mb-1.5">{title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-amber-600 to-orange-600 p-10 text-center text-white">
          <TrendingUp size={32} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-2">Ready to go digital?</h2>
          <p className="text-amber-100 text-sm mb-6 max-w-sm mx-auto">
            Register your restaurant in under 5 minutes and start accepting digital orders today.
          </p>
          <button
            onClick={() => setPage("signup")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-700 text-sm font-semibold rounded-xl hover:bg-amber-50 transition-colors"
          >
            Register your restaurant
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-8 text-center text-xs text-stone-400">
        © 2025 Swaadsadan. Built for Nepali restaurants.
      </footer>
    </div>
  );
}

// ─── PAGE: LOGIN ──────────────────────────────────────────────────────────────
function LoginPage({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setPage("success-login"); }, 1200);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Breadcrumb crumbs={[{ label: "Home", page: "landing" }, { label: "Sign in" }]} setPage={setPage} />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {/* Card */}
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8">
            <div className="mb-6">
              <div className="text-2xl font-bold tracking-tight text-stone-900 mb-1">Welcome back</div>
              <p className="text-sm text-stone-500">Sign in to your restaurant dashboard</p>
            </div>

            <GoogleButton label="Continue with Google" />
            <Divider />

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                label="Email address"
                type="email"
                placeholder="restaurant@example.com"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                icon={Lock}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex justify-end">
                <button type="button" className="text-xs text-amber-600 hover:text-amber-700 transition-colors">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors mt-2"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-stone-500 mt-5">
            New restaurant?{" "}
            <button onClick={() => setPage("signup")} className="text-amber-600 font-medium hover:text-amber-700">
              Create account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE: SIGNUP ─────────────────────────────────────────────────────────────
function SignupPage({ setPage }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setPage("register"); }, 1000);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Breadcrumb crumbs={[{ label: "Home", page: "landing" }, { label: "Create account" }]} setPage={setPage} />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8">
            <div className="mb-6">
              <div className="text-2xl font-bold tracking-tight text-stone-900 mb-1">Create your account</div>
              <p className="text-sm text-stone-500">Start managing your restaurant digitally</p>
            </div>

            <GoogleButton label="Sign up with Google" />
            <Divider />

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField label="Full name" placeholder="Ram Prasad Sharma" icon={User} value={form.name} onChange={set("name")} />
              <InputField label="Email address" type="email" placeholder="you@restaurant.com" icon={Mail} value={form.email} onChange={set("email")} />
              <InputField label="Password" type="password" placeholder="Min. 8 characters" icon={Lock} value={form.password} onChange={set("password")} />

              <p className="text-xs text-stone-400 leading-relaxed">
                By creating an account, you agree to our{" "}
                <span className="text-amber-600 cursor-pointer">Terms of Service</span> and{" "}
                <span className="text-amber-600 cursor-pointer">Privacy Policy</span>.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-stone-500 mt-5">
            Already have an account?{" "}
            <button onClick={() => setPage("login")} className="text-amber-600 font-medium hover:text-amber-700">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE: RESTAURANT REGISTER ────────────────────────────────────────────────
function RegisterPage({ setPage }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", desc: "" });
  const [cuisines, setCuisines] = useState(["Nepali"]);
  const [payments, setPayments] = useState(["Cash", "eSewa"]);
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const toggle = (arr, setArr) => (tag) =>
    setArr(arr.includes(tag) ? arr.filter((t) => t !== tag) : [...arr, tag]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setPage("success-register"); }, 1200);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Breadcrumb
        crumbs={[{ label: "Home", page: "landing" }, { label: "Account", page: "signup" }, { label: "Restaurant setup" }]}
        setPage={setPage}
      />

      <div className="max-w-xl mx-auto px-6 py-8">
        {/* Progress steps */}
        <div className="flex items-center gap-2 mb-8">
          {["Account created", "Restaurant info", "Go live"].map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1 last:flex-none">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                  i < 2 ? "bg-amber-600 text-white" : "bg-stone-200 text-stone-400"
                }`}>
                  {i < 1 ? <Check size={12} /> : i + 1}
                </div>
                <span className={`text-xs hidden sm:block ${i < 2 ? "text-stone-700 font-medium" : "text-stone-400"}`}>
                  {label}
                </span>
              </div>
              {i < 2 && <div className={`flex-1 h-px ${i < 1 ? "bg-amber-300" : "bg-stone-200"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 sm:p-8">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-stone-900 mb-1">Set up your restaurant</h1>
            <p className="text-sm text-stone-500">This info will appear on your public menu page</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Basic info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Restaurant name" placeholder="Mero Restaurant" icon={UtensilsCrossed} value={form.name} onChange={set("name")} />
              <InputField label="Phone number" type="tel" placeholder="98XXXXXXXX" icon={Phone} value={form.phone} onChange={set("phone")} />
            </div>
            <InputField label="Address" placeholder="Thamel, Kathmandu" icon={MapPin} value={form.address} onChange={set("address")} />
            <InputField label="Short description" placeholder="e.g. Authentic Newari cuisine since 1995" icon={FileText} value={form.desc} onChange={set("desc")} />

            {/* Cuisine type */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-stone-600">Cuisine type</label>
                <span className="text-xs text-stone-400">{cuisines.length} selected</span>
              </div>
              <TagSelector options={CUISINE_TAGS} selected={cuisines} onToggle={toggle(cuisines, setCuisines)} />
            </div>

            {/* Payment methods */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-stone-600">Payment methods</label>
                <span className="text-xs text-stone-400">{payments.length} selected</span>
              </div>
              <TagSelector options={PAYMENT_TAGS} selected={payments} onToggle={toggle(payments, setPayments)} />
            </div>

            {/* Security note */}
            <div className="flex items-start gap-2 p-3 bg-stone-50 rounded-xl border border-stone-100">
              <ShieldCheck size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-stone-500 leading-relaxed">
                Your restaurant details are securely stored. You can update them anytime from the dashboard.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
              {loading ? "Setting up..." : "Complete setup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE: SUCCESS ────────────────────────────────────────────────────────────
function SuccessPage({ type, setPage }) {
  const isLogin = type === "login";

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 text-center">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
        isLogin ? "bg-blue-50" : "bg-green-50"
      }`}>
        {isLogin
          ? <LayoutDashboard size={28} className="text-blue-500" />
          : <Check size={28} className="text-green-500" strokeWidth={2.5} />
        }
      </div>

      <h1 className="text-2xl font-bold text-stone-900 mb-2">
        {isLogin ? "Welcome back!" : "Restaurant registered!"}
      </h1>
      <p className="text-stone-500 text-sm max-w-xs leading-relaxed mb-8">
        {isLogin
          ? "You are signed in. Redirecting you to your restaurant dashboard..."
          : "Your restaurant is live. Manage your menu, view orders, and share your QR code with customers."
        }
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setPage("landing")}
          className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-xl transition-colors inline-flex items-center gap-2"
        >
          Go to dashboard <ArrowRight size={15} />
        </button>
        <button
          onClick={() => setPage("landing")}
          className="px-6 py-2.5 border border-stone-200 text-stone-600 text-sm rounded-xl hover:bg-stone-50 transition-colors"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("landing");

  const showNav = ["landing", "login", "signup"].includes(page);

  return (
    <div className="min-h-screen font-sans antialiased">
      {showNav && <Navbar page={page} setPage={setPage} />}

      {page === "landing"         && <LandingPage setPage={setPage} />}
      {page === "login"           && <LoginPage setPage={setPage} />}
      {page === "signup"          && <SignupPage setPage={setPage} />}
      {page === "register"        && <RegisterPage setPage={setPage} />}
      {page === "success-login"   && <SuccessPage type="login" setPage={setPage} />}
      {page === "success-register"&& <SuccessPage type="register" setPage={setPage} />}
    </div>
  );
}