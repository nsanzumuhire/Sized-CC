"use client";

import { motion } from "framer-motion";
import {
    Linkedin,
    Instagram,
    Youtube,
    Phone
} from "lucide-react";
import { TikTok, WhatsApp } from "@/components/custom-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

const socialLinks = [
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/sized-rw-3a75873a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        color: "group-hover:text-[#0077b5]",
        border: "group-hover:border-[#0077b5]/30",
        bg: "group-hover:bg-[#0077b5]/10"
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/sizedrw?igsh=MXQ0YzVlbnVyYnVidg==",
        color: "group-hover:text-[#E4405F]",
        border: "group-hover:border-[#E4405F]/30",
        bg: "group-hover:bg-[#E4405F]/10"
    },
    {
        name: "WhatsApp",
        icon: WhatsApp,
        href: "https://wa.me/message/O4Z7KB6RKR2PF1",
        color: "group-hover:text-[#25D366]",
        border: "group-hover:border-[#25D366]/30",
        bg: "group-hover:bg-[#25D366]/10"
    },
    {
        name: "TikTok",
        icon: TikTok,
        href: "https://www.tiktok.com/@sizedrw?_r=1&_t=ZM-92vU89sLjmV",
        color: "group-hover:text-white",
        border: "group-hover:border-white/30",
        bg: "group-hover:bg-white/10"
    },
    {
        name: "YouTube",
        icon: Youtube,
        href: "https://youtube.com/@sizedrwanda?si=I1T5rL7V8yJ2OFBG",
        color: "group-hover:text-[#FF0000]",
        border: "group-hover:border-[#FF0000]/30",
        bg: "group-hover:bg-[#FF0000]/10"
    }
];

export function Socials() {
    return (
        <section className="pb-16 pt-0 bg-black relative z-20">
            <div className="container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center gap-4"
                >
                    {/* Ultra Minimal Label */}
                    <span className="text-[10px] font-medium text-neutral-600 uppercase tracking-[0.3em]">
                        Connect
                    </span>

                    {/* Centered Dock Container */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-sm">

                        {/* Phone Action */}
                        <a
                            href="tel:+250795555575"
                            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/50 border border-white/5 hover:border-primary/50 hover:bg-neutral-900 transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            <div className="p-1.5 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                <Phone className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-mono font-bold text-neutral-300 group-hover:text-white transition-colors">
                                +250 795 555 575
                            </span>
                        </a>

                        {/* Divider */}
                        <div className="w-full h-px sm:w-px sm:h-6 bg-white/5 mx-1" />

                        {/* Social Icons Row */}
                        <div className="flex items-center gap-1.5">
                            {socialLinks.map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900/50 border border-white/5 hover:border-transparent transition-all duration-300"
                                    >
                                        {/* Hover Background Glow */}
                                        <div className={cn("absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm", social.bg)} />
                                        <div className={cn("absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300", social.bg)} />
                                        <div className={cn("absolute inset-0 border border-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300", social.border)} />

                                        {/* Icon */}
                                        <social.icon className={cn("w-4 h-4 relative z-10 text-neutral-400 transition-colors duration-300", social.color)} />
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
