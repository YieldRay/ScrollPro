/**
 * css-only version
 */
import "../scrollpro.css";

const el = document.createElement("div");
el.className = "scroll-pro-cssonly";
document.body.append(el);

/**
 * scrollpup.js clone
 */
import { scrollpro } from "../scrollpro.ts";

scrollpro({
    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
}).style.top = "10px";
