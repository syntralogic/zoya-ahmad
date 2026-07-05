import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as BadgeCheck, S as CircleAlert, _ as Award, a as Phone, b as CodeXml, c as Menu, d as Instagram, f as Heart, g as Download, h as Dribbble, i as Send, l as Mail, m as ExternalLink, n as Sun, o as Palette, p as Github, r as ShieldCheck, s as Moon, t as X, u as Linkedin, v as ArrowRight, x as CircleCheckBig, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Xa66E-cM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* useTheme — toggles the `light` class on <html>. Defaults to dark.
*/
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" ? window.localStorage.getItem("aa-theme") : null;
		if (stored) setTheme(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("light", theme === "light");
		window.localStorage.setItem("aa-theme", theme);
	}, [theme]);
	return {
		theme,
		toggle: (0, import_react.useCallback)(() => setTheme((t) => t === "dark" ? "light" : "dark"), [])
	};
}
/** Preloader — brief animated intro shown on first paint. */
function Preloader() {
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setDone(true), 1100);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: `fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${done ? "pointer-events-none opacity-0" : "opacity-100"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative grid h-20 w-20 place-items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-0 rounded-2xl border-2 border-primary/30 border-t-primary",
					style: { animation: "spin-slow 0.9s linear infinite" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-bold text-gradient",
					children: "AA"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm tracking-[0.3em] text-muted-foreground",
				children: "LOADING"
			})]
		})
	});
}
/**
* CustomCursor — glowing dot + trailing ring that follows the pointer.
* Disabled on touch / coarse-pointer devices.
*/
function CustomCursor() {
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const dot = dotRef.current;
		const ring = ringRef.current;
		if (!dot || !ring) return;
		let ringX = 0;
		let ringY = 0;
		let mouseX = 0;
		let mouseY = 0;
		let raf = 0;
		const onMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
		};
		const onOver = (e) => {
			const interactive = e.target.closest("a, button, input, textarea, [role='button']");
			ring.style.scale = interactive ? "1.8" : "1";
			ring.style.opacity = interactive ? "0.9" : "0.5";
		};
		const loop = () => {
			ringX += (mouseX - ringX) * .18;
			ringY += (mouseY - ringY) * .18;
			ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
			raf = requestAnimationFrame(loop);
		};
		window.addEventListener("mousemove", onMove);
		window.addEventListener("mouseover", onOver);
		raf = requestAnimationFrame(loop);
		return () => {
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseover", onOver);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dotRef,
		"aria-hidden": true,
		className: "pointer-events-none fixed -left-1 -top-1 z-[90] hidden h-2 w-2 rounded-full bg-primary md:block"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ringRef,
		"aria-hidden": true,
		className: "pointer-events-none fixed -left-4 -top-4 z-[90] hidden h-8 w-8 rounded-full border border-primary/60 opacity-50 transition-[scale,opacity] duration-200 md:block"
	})] });
}
var PROFILE = {
	name: "Arooj Ashfaq",
	titles: ["Full Stack Web Developer", "Cybersecurity Learner"],
	email: "aroojashfaq979@gmail.com",
	phone: "+92 322 8781212",
	phoneHref: "+923228781212"
};
var SOCIALS = [
	{
		label: "GitHub",
		href: "https://github.com/Arooj-Ashfaq",
		icon: Github
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/arooj-ashfaq-400538318/",
		icon: Linkedin
	},
	{
		label: "Dribbble",
		href: "https://dribbble.com/Play_with_designs",
		icon: Dribbble
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/_aroojashfaq_?igsh=cWF6YWRramRzY2lo",
		icon: Instagram
	}
];
var CONTACT_METHODS = [{
	label: "Email",
	value: PROFILE.email,
	href: `mailto:${PROFILE.email}`,
	icon: Mail
}, {
	label: "Phone / WhatsApp",
	value: PROFILE.phone,
	href: `https://wa.me/${PROFILE.phoneHref}`,
	icon: Phone
}];
var NAV_LINKS = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "portfolio",
		label: "Portfolio"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var SKILL_CARDS = [{
	key: "fullstack",
	title: "Full Stack Development",
	badge: "Certified Full Stack Developer",
	badgeTone: "primary",
	status: "Certified",
	description: "Certified Full Stack Developer with expertise in both frontend and backend, building complete, scalable and secure web applications.",
	groups: [
		{
			label: "Frontend",
			items: [
				"HTML5",
				"CSS3",
				"JavaScript",
				"React.js",
				"Bootstrap",
				"Tailwind"
			]
		},
		{
			label: "Backend",
			items: [
				"Node.js",
				"Express.js",
				"Python",
				"PHP"
			]
		},
		{
			label: "Databases",
			items: [
				"MongoDB",
				"MySQL",
				"PostgreSQL"
			]
		},
		{
			label: "Tools",
			items: [
				"Git",
				"GitHub",
				"REST APIs",
				"Firebase"
			]
		}
	],
	bars: [
		{
			name: "React.js",
			level: 90
		},
		{
			name: "Node.js",
			level: 85
		},
		{
			name: "Python",
			level: 80
		}
	]
}, {
	key: "cyber",
	title: "Cybersecurity",
	badge: "Currently Learning & Building",
	badgeTone: "primary",
	status: "In Progress",
	description: "Actively learning and building cybersecurity projects to secure applications, networks and systems.",
	groups: [],
	bars: [
		{
			name: "Network Security",
			level: 70
		},
		{
			name: "Kali Linux",
			level: 75
		},
		{
			name: "Web Application Security",
			level: 65
		},
		{
			name: "Cryptography Basics",
			level: 60
		},
		{
			name: "Ethical Hacking Techniques",
			level: 65
		},
		{
			name: "Security Auditing",
			level: 60
		}
	]
}];
var PORTFOLIO = [{
	key: "development",
	label: "Web Development",
	accent: "primary",
	projects: [
		{
			title: "PawDeal - Pet Ecosystem",
			description: "Full-stack pet platform using React/TypeScript, NestJS/Express.js backend, PostgreSQL, Redis caching, and AWS/Docker deployment.",
			tags: [
				"React",
				"TypeScript",
				"NestJS",
				"Express.js",
				"PostgreSQL",
				"Redis",
				"AWS",
				"Docker"
			],
			link: "https://github.com/Arooj-Ashfaq/",
			href: "https://pawdeal-frontend.vercel.app/",
			t1: "Source Code",
			t2: "Live Demo"
		},
		{
			title: "Synergy Social - Social platform",
			description: "Full-stack social community platform enabling users to connect, create, and grow together using React/TypeScript, NestJS/Express.js, PostgreSQL, Redis, and AWS/Docker.",
			tags: [
				"React",
				"TypeScript",
				"NestJS",
				"Express.js",
				"PostgreSQL",
				"Redis",
				"JWT",
				"AWS",
				"Docker"
			],
			link: "https://github.com/syntralogic",
			href: "https://synergy-social-frontend.vercel.app/",
			t1: "Source Code",
			t2: "Live Demo"
		},
		{
			title: "Other Projects",
			description: "A travel & tourism management system built in C# and C++ providing a console based and graphics based interface.",
			tags: [
				"C++",
				"C#",
				"Windows Form",
				".Net"
			],
			link: "https://github.com/syntralogic",
			href: "https://synergy-social-frontend.vercel.app/",
			t1: "Source Code",
			t2: "Live Demo"
		}
	]
}, {
	key: "cyber",
	label: "Cybersecurity",
	accent: "primary",
	projects: [
		{
			title: "Network Security Lab",
			description: "Hands-on labs exploring network scanning, hardening and traffic analysis with Kali Linux.",
			tags: ["Kali Linux", "Network Security"],
			link: "https://github.com/Arooj-Ashfaq/",
			href: "https://github.com/syntralogic/",
			t1: "Source Code",
			t2: "Live Demo",
			status: "Coming Soon"
		},
		{
			title: "Web App Security Audit",
			description: "A practical project auditing common web vulnerabilities and documenting safe fixes.",
			tags: ["Web Security", "OWASP"],
			link: "https://github.com/Arooj-Ashfaq/",
			href: "https://github.com/syntralogic/",
			t1: "Source Code",
			t2: "Live Demo",
			status: "Coming Soon"
		},
		{
			title: "Crypto Basics Toolkit",
			description: "Exploring cryptography fundamentals through small, well-documented experiments.",
			tags: ["Cryptography", "Python"],
			link: "https://github.com/Arooj-Ashfaq/",
			href: "https://github.com/syntralogic/",
			t1: "Source Code",
			t2: "Live Demo",
			status: "Coming Soon"
		}
	]
}];
/**
* useActiveSection — tracks which section id is currently in view
* for navbar active-link highlighting.
*/
function useActiveSection(ids) {
	const [active, setActive] = (0, import_react.useState)(ids[0] ?? "");
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]) setActive(visible[0].target.id);
		}, {
			rootMargin: "-45% 0px -50% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, [ids]);
	return active;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var ids = NAV_LINKS.map((l) => l.id);
function Navbar({ theme, onToggleTheme }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const active = useActiveSection(ids);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "glass border-b border-border py-3" : "py-5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					"aria-label": "Arooj Ashfaq — home",
					className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/40 font-display text-lg font-bold text-primary [box-shadow:var(--shadow-glow)] transition-transform hover:scale-105",
					children: "AA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 md:flex",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${link.id}`,
						className: cn("relative rounded-full px-4 py-2 text-sm font-medium transition-colors", active === link.id ? "text-primary" : "text-muted-foreground hover:text-foreground"),
						children: [link.label, active === link.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary [box-shadow:var(--shadow-glow)]" })]
					}) }, link.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onToggleTheme,
						"aria-label": "Toggle color theme",
						className: "grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary",
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 18 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((o) => !o),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						className: "grid h-10 w-10 place-items-center rounded-full border border-border text-foreground md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid overflow-hidden px-5 transition-all duration-300 md:hidden", open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "min-h-0 overflow-hidden",
				children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${link.id}`,
					onClick: () => setOpen(false),
					className: cn("block rounded-lg px-4 py-3 text-sm font-medium transition-colors", active === link.id ? "bg-card text-primary" : "text-muted-foreground hover:bg-card hover:text-foreground"),
					children: link.label
				}) }, link.id))
			})
		})]
	});
}
var MYSELF_default = "/assets/MYSELF-DSm2XJZB.png";
/**
* useTypingCycle — typewriter effect that cycles through a list of words.
*/
function useTypingCycle(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}) {
	const [text, setText] = (0, import_react.useState)("");
	const [wordIndex, setWordIndex] = (0, import_react.useState)(0);
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const current = words[wordIndex % words.length];
		let timeout;
		if (!deleting && text === current) timeout = setTimeout(() => setDeleting(true), pause);
		else if (deleting && text === "") {
			setDeleting(false);
			setWordIndex((i) => (i + 1) % words.length);
		} else timeout = setTimeout(() => {
			setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
		}, deleting ? deleteSpeed : typeSpeed);
		return () => clearTimeout(timeout);
	}, [
		text,
		deleting,
		wordIndex,
		words,
		typeSpeed,
		deleteSpeed,
		pause
	]);
	return text;
}
/**
* Magnetic — wraps children and gently pulls them toward the cursor on hover.
*/
function Magnetic({ children, className, as: Tag = "div", strength = .4, ...rest }) {
	const ref = (0, import_react.useRef)(null);
	const handleMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = e.clientX - (rect.left + rect.width / 2);
		const y = e.clientY - (rect.top + rect.height / 2);
		el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
	};
	const reset = () => {
		if (ref.current) ref.current.style.transform = "translate(0,0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		onMouseMove: handleMove,
		onMouseLeave: reset,
		className: cn("inline-flex transition-transform duration-300 ease-out will-change-transform", className),
		...rest,
		children
	});
}
/**
* SocialIcons — magnetic, glowing social links with ARIA labels.
*/
function SocialIcons({ className, size = "md" }) {
	const dims = size === "lg" ? "h-12 w-12" : "h-11 w-11";
	const icon = size === "lg" ? 22 : 19;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: cn("flex items-center gap-3", className),
		children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
			strength: .5,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: s.href,
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": s.label,
				className: cn("group grid place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors duration-300 hover:border-primary/60 hover:text-primary hover:[box-shadow:var(--shadow-glow)]", dims),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
					size: icon,
					className: "transition-transform duration-300 group-hover:scale-110"
				})
			})
		}) }, s.label))
	});
}
function Hero() {
	const typed = useTypingCycle(PROFILE.titles);
	const parallaxRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = parallaxRef.current;
		if (!el) return;
		const onMove = (e) => {
			const x = (e.clientX / window.innerWidth - .5) * 24;
			const y = (e.clientY / window.innerHeight - .5) * 24;
			el.style.transform = `translate(${x}px, ${y}px)`;
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate flex min-h-screen items-center overflow-hidden pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: parallaxRef,
				className: "aurora pointer-events-none absolute inset-0 -z-10 opacity-80"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -left-32 top-1/3 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl",
				style: { animation: "float-blob 9s ease-in-out infinite" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl",
				style: { animation: "float-blob 11s ease-in-out infinite reverse" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 md:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reveal is-visible mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground",
							children: "Available for freelance & collaboration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl",
							children: [
								"Hi, I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: PROFILE.name
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 min-h-[2.2em] text-xl font-semibold text-foreground sm:text-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary caret",
								children: typed
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground",
							children: "A certified Full Stack Developer crafting scalable web apps and striking visuals — now diving into the world of cybersecurity."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
								strength: .35,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#portfolio",
									className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:[box-shadow:var(--shadow-glow)]",
									children: ["View My Work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										size: 17,
										className: "transition-transform group-hover:translate-x-1"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
								strength: .35,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold/60 hover:text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), "Get in Touch"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, {
							className: "mt-9",
							size: "lg"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-1 flex justify-center md:order-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-transparent to-gold/40 blur-md",
							style: { animation: "spin-slow 14s linear infinite" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[1.8rem] border border-primary/30 [box-shadow:var(--shadow-glow)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: MYSELF_default,
								alt: "Arooj Ashfaq",
								width: 800,
								height: 800,
								className: "h-72 w-72 object-cover sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" })]
						})]
					})
				})]
			})
		]
	});
}
/**
* useReveal — IntersectionObserver helper that adds `is-visible`
* to the element once it scrolls into view (one-shot).
*/
function useReveal(options) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || visible) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			});
		}, {
			threshold: .18,
			rootMargin: "0px 0px -10% 0px",
			...options
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [visible, options]);
	return {
		ref,
		visible
	};
}
var base = {
	up: "reveal",
	left: "reveal-left",
	right: "reveal-right"
};
/**
* Reveal — scroll-triggered animation wrapper using IntersectionObserver.
* Supports an optional stagger delay (ms).
*/
function Reveal({ children, className, variant = "up", delay = 0, as: Tag = "div" }) {
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn(base[variant], visible && "is-visible", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function SectionHeading({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mx-auto mb-14 max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 inline-block rounded-full border border-border bg-card/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-extrabold sm:text-4xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-muted-foreground",
				children: subtitle
			})
		]
	});
}
var highlights = [
	{
		icon: CodeXml,
		label: "Full Stack Dev",
		tone: "text-primary"
	},
	{
		icon: Palette,
		label: "Graphic Designer",
		tone: "text-gold"
	},
	{
		icon: ShieldCheck,
		label: "Cybersecurity Learner",
		tone: "text-primary"
	}
];
var stats = [
	{
		value: "2+",
		label: "Certifications"
	},
	{
		value: "10+",
		label: "Projects"
	},
	{
		value: "3",
		label: "Disciplines"
	},
	{
		value: "100%",
		label: "Dedication"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative scroll-mt-20 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "About Me",
				title: "Where code meets creativity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed text-justify text-muted-foreground",
							children: [
								"I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: "Arooj Ashfaq"
								}),
								" — a",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: " Certified Full Stack Web Developer"
								}),
								" and a",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: " Cybersecurity enthusiast"
								}),
								". I blend engineering precision with design sensibility to build digital experiences that are both functional and beautiful."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-lg leading-relaxed text-justify text-muted-foreground",
							children: [
								"My dual expertise lets me carry an idea from concept and visual identity all the way to a fully working, scalable and secure web application. Right now, I'm actively expanding into",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: " cybersecurity"
								}),
								", learning to secure applications, networks and systems through hands-on projects."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 flex flex-wrap gap-3",
							children: highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(h.icon, {
									size: 16,
									className: h.tone
								}), h.label]
							}, h.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 inline-flex items-center gap-3 rounded-xl border border-gold/30 bg-card/60 px-5 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
								className: "text-gold",
								size: 22
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm text-muted-foreground",
								children: ["Certified in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: "Full Stack Development"
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "right",
					className: "grid grid-cols-2 gap-4",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hover-lift rounded-2xl border border-border bg-card/60 p-6 text-center",
						style: { transitionDelay: `${i * 60}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-extrabold text-gradient",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				})]
			})]
		})
	});
}
var ICONS = {
	fullstack: CodeXml,
	design: Palette,
	cyber: ShieldCheck
};
/** Animated progress bar that fills when scrolled into view. */
function ProgressBar({ bar, accent, delay }) {
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1.5 flex items-center justify-between text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-foreground",
				children: bar.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: accent === "gold" ? "text-gold" : "text-primary",
				children: [bar.level, "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2 w-full overflow-hidden rounded-full bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full rounded-full transition-[width] duration-1000 ease-out", accent === "gold" ? "bg-gold" : "bg-primary"),
				style: {
					width: visible ? `${bar.level}%` : "0%",
					transitionDelay: `${delay}ms`,
					boxShadow: accent === "gold" ? "0 0 12px color-mix(in oklab, var(--gold) 70%, transparent)" : "0 0 12px color-mix(in oklab, var(--primary) 70%, transparent)"
				}
			})
		})]
	});
}
function Card({ card, index }) {
	const Icon = ICONS[card.key];
	const accent = card.badgeTone;
	const accentText = accent === "gold" ? "text-gold" : "text-primary";
	const accentBorder = accent === "gold" ? "hover:border-gold/50" : "hover:border-primary/50";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index * 120,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: cn("hover-lift group flex h-full flex-col rounded-3xl border border-border bg-card/60 p-7", accentBorder),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid h-12 w-12 place-items-center rounded-2xl border", accent === "gold" ? "border-gold/40 text-gold" : "border-primary/40 text-primary"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 24 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-full border px-3 py-1 text-xs font-semibold", card.status === "In Progress" ? "border-gold/40 bg-gold/10 text-gold" : "border-primary/40 bg-primary/10 text-primary"),
						children: card.status
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold",
					children: card.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("mt-2 inline-flex items-center gap-1.5 text-sm font-semibold", accentText),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { size: 16 }), card.badge]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: card.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4",
					children: card.bars.map((bar, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
						bar,
						accent,
						delay: i * 120
					}, bar.name))
				}),
				card.groups.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-3",
					children: card.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: g.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-2",
						children: g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-foreground transition-colors group-hover:border-border",
							children: item
						}, item))
					})] }, g.label))
				}),
				card.link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: card.link.href,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-gold/40 px-4 py-2 text-sm font-semibold text-gold transition-all hover:[box-shadow:var(--shadow-gold)]",
					children: [card.link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 })]
				})
			]
		})
	});
}
function Skills() {
	const filteredCards = SKILL_CARDS.filter((card) => card.key === "fullstack" || card.key === "cyber");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "relative scroll-mt-20 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 -z-10 aurora opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Skills & Certifications",
				title: "Core Expertise",
				subtitle: "Full Stack Development & Cybersecurity — building secure, scalable web applications."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 max-w-4xl mx-auto",
				children: filteredCards.map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					card,
					index: i
				}, card.key))
			})]
		})]
	});
}
var CAT_ICONS = {
	development: CodeXml,
	design: Palette,
	cyber: ShieldCheck
};
function ProjectCard({ project, accent, Icon, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index * 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative grid h-40 place-items-center overflow-hidden", accent === "gold" ? "bg-gradient-to-br from-gold/20 to-transparent" : "bg-gradient-to-br from-primary/20 to-transparent"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 52,
					className: cn("transition-transform duration-500 group-hover:scale-110", accent === "gold" ? "text-gold" : "text-primary")
				}), project.status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute right-3 top-3 rounded-full border border-gold/40 bg-background/70 px-3 py-1 text-xs font-semibold text-gold",
					children: project.status
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg font-bold",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-justify mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
						children: project.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: project.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-row gap-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.link,
							target: "_blank",
							rel: "noopener noreferrer",
							className: cn("mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold transition-colors", accent === "gold" ? "text-gold hover:text-gold/80" : "text-primary hover:text-primary/80"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 14 }),
								project.t1,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									size: 14,
									className: "transition-transform group-hover:translate-x-0.5"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: cn("mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold transition-colors", accent === "gold" ? "text-gold hover:text-gold/80" : "text-primary hover:text-primary/80"),
							children: [project.t2, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								size: 14,
								className: "transition-transform group-hover:translate-x-0.5"
							})]
						})]
					})
				]
			})]
		})
	});
}
function Portfolio() {
	const [active, setActive] = (0, import_react.useState)("all");
	const categories = PORTFOLIO;
	const filtered = active === "all" ? categories : categories.filter((c) => c.key === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "relative scroll-mt-20 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Portfolio",
					title: "Selected work across disciplines",
					subtitle: "Development, design and cybersecurity projects — each linking out to GitHub or Linkedin."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-10 flex flex-wrap justify-center gap-2",
					children: [{
						key: "all",
						label: "All"
					}, ...categories.map((c) => ({
						key: c.key,
						label: c.label
					}))].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
						strength: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive(tab.key),
							className: cn("rounded-full border px-5 py-2 text-sm font-medium transition-all", active === tab.key ? "border-primary bg-primary text-primary-foreground [box-shadow:var(--shadow-glow)]" : "border-border bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"),
							children: tab.label
						})
					}, tab.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-14",
					children: filtered.map((cat) => {
						const Icon = CAT_ICONS[cat.key];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid h-9 w-9 place-items-center rounded-xl border", cat.accent === "gold" ? "border-gold/40 text-gold" : "border-primary/40 text-primary"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold",
								children: cat.label
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
							children: cat.projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
								project: p,
								accent: cat.accent,
								Icon,
								index: i
							}, p.title))
						})] }, cat.key);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-20 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-md font-medium text-muted-foreground",
						children: "Wanna See My GitHub?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-light mt-6 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
							strength: .25,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/Arooj-Ashfaq",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-card hover:scale-105",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 18 }),
									"github/Arooj-Ashfaq",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
							strength: .25,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/syntralogic",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-card hover:scale-105",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 18 }),
									"github/syntralogic",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 })
								]
							})
						})]
					})]
				})
			]
		})
	});
}
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [statusMessage, setStatusMessage] = (0, import_react.useState)("");
	const formRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		es_default.init("wRdnBuEHAEExUTUQz");
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			setStatus("error");
			setStatusMessage("Please fill in all fields.");
			setTimeout(() => resetStatus(), 3e3);
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			setStatus("error");
			setStatusMessage("Please enter a valid email address.");
			setTimeout(() => resetStatus(), 3e3);
			return;
		}
		setStatus("sending");
		setStatusMessage("Sending your message...");
		try {
			const templateParams = {
				from_name: form.name,
				from_email: form.email,
				message: form.message,
				reply_to: form.email,
				subject: `Portfolio Contact: ${form.name}`
			};
			console.log("Sending email with params:", {
				to: PROFILE.email,
				from: form.email,
				name: form.name
			});
			const response = await es_default.send("service_lw34i6n", "template_et3ypxm", templateParams, "wRdnBuEHAEExUTUQz");
			console.log("Email sent successfully:", response);
			setStatus("success");
			setStatusMessage("✓ Message sent successfully! I'll get back to you soon.");
			const sentMessages = JSON.parse(localStorage.getItem("sentMessages") || "[]");
			sentMessages.push({
				...form,
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				status: "delivered",
				emailId: response.text
			});
			localStorage.setItem("sentMessages", JSON.stringify(sentMessages));
			setForm({
				name: "",
				email: "",
				message: ""
			});
			setTimeout(() => resetStatus(), 5e3);
		} catch (error) {
			console.error("Email send error:", error);
			setStatus("error");
			setStatusMessage(error instanceof Error ? `Failed to send: ${error.message}` : "Something went wrong. Please try again or email me directly.");
			setTimeout(() => resetStatus(), 4e3);
		}
	};
	const resetStatus = () => {
		setStatus("idle");
		setStatusMessage("");
	};
	const inputCls = "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:[box-shadow:var(--shadow-glow)] disabled:opacity-50 disabled:cursor-not-allowed";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative scroll-mt-20 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 -z-10 aurora opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact",
				title: "Let's build something great",
				subtitle: "Have a project, a question, or just want to say hi? My inbox is always open."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "left",
					className: "flex flex-col gap-4",
					children: [
						CONTACT_METHODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: m.href,
							target: m.label.includes("Phone") ? "_blank" : void 0,
							rel: "noopener noreferrer",
							className: "hover-lift group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/40 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-wider text-muted-foreground",
									children: m.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-medium text-foreground group-hover:text-primary",
									children: m.value
								})]
							})]
						}, m.label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card/60 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 text-sm font-medium text-muted-foreground",
								children: "Find me online"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, {})]
						}),
						typeof window !== "undefined" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-border/40 bg-card/30 p-4 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: JSON.parse(localStorage.getItem("sentMessages") || "[]").length
									}),
									" ",
									"messages sent via this form"
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						ref: formRef,
						onSubmit: handleSubmit,
						className: cn("rounded-3xl border border-border bg-card/60 p-6 sm:p-8 transition-all", {
							idle: "",
							sending: "border-primary/40 bg-primary/5",
							success: "border-green-500/40 bg-green-500/5",
							error: "border-red-500/40 bg-red-500/5"
						}[status]),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "name",
									className: "mb-1.5 block text-sm font-medium",
									children: ["Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									name: "name",
									type: "text",
									required: true,
									autoComplete: "name",
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									}),
									placeholder: "Your name",
									disabled: status === "sending" || status === "success",
									className: inputCls
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "email",
									className: "mb-1.5 block text-sm font-medium",
									children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									autoComplete: "email",
									value: form.email,
									onChange: (e) => setForm({
										...form,
										email: e.target.value
									}),
									placeholder: "you@example.com",
									disabled: status === "sending" || status === "success",
									className: inputCls
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "message",
									className: "mb-1.5 block text-sm font-medium",
									children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									required: true,
									rows: 5,
									value: form.message,
									onChange: (e) => setForm({
										...form,
										message: e.target.value
									}),
									placeholder: "Tell me about your project...",
									disabled: status === "sending" || status === "success",
									className: `${inputCls} resize-none`
								})]
							}),
							statusMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("mt-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm", status === "success" && "bg-green-500/10 text-green-400 border border-green-500/20", status === "error" && "bg-red-500/10 text-red-400 border border-red-500/20", status === "sending" && "bg-primary/10 text-primary border border-primary/20"),
								children: [
									status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
										size: 18,
										className: "shrink-0"
									}),
									status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
										size: 18,
										className: "shrink-0"
									}),
									status === "sending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										size: 18,
										className: "shrink-0 animate-spin"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: statusMessage })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: status === "sending" || status === "success",
								className: cn("group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all", status === "success" ? "bg-green-500 text-white cursor-default" : "bg-primary text-primary-foreground hover:[box-shadow:var(--shadow-glow)]"),
								children: status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									size: 16,
									className: "animate-spin"
								}), "Sending..."] }) : status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { size: 16 }), "Sent!"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
									size: 16,
									className: "transition-transform group-hover:translate-x-1"
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center text-xs text-muted-foreground",
								children: status === "success" ? "✓ Message delivered! I'll respond via email." : "Your message will be sent directly to my inbox."
							})
						]
					})
				})]
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "grid h-12 w-12 place-items-center rounded-xl border border-primary/40 font-display text-lg font-bold text-primary",
					children: "AA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap justify-center gap-x-6 gap-y-2",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${l.id}`,
						className: "text-sm text-muted-foreground transition-colors hover:text-primary",
						children: l.label
					}) }, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1.5 text-sm text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						PROFILE.name,
						". Built with",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							size: 14,
							className: "text-gold",
							fill: "currentColor"
						}),
						"and clean code."
					]
				})
			]
		})
	});
}
function Index() {
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {
			theme,
			onToggleTheme: toggle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
