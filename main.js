(()=>{console.log("Hello World");const t=document.getElementById("content"),e=document.createElement("div");e.setAttribute("id","header"),t.appendChild(e);const n=document.createElement("div");n.setAttribute("id","home-div"),e.appendChild(n);const d=document.createElement("div");d.setAttribute("id","menu-div"),e.appendChild(d);const i=document.createElement("div");i.setAttribute("id","contact-div"),e.appendChild(i);const o=document.createElement("button");o.setAttribute("id","home"),o.classList.add("button"),n.appendChild(o),o.textContent="Home";const a=document.createElement("button");a.setAttribute("id","menu"),a.classList.add("button"),d.appendChild(a),a.textContent="Menu";const c=document.createElement("button");c.setAttribute("id","contact"),c.classList.add("button"),i.appendChild(c),c.textContent="Contact";const s=document.createElement("div");s.setAttribute("id","restaurant-name"),t.appendChild(s),s.textContent="Java Spice";const u=document.createElement("div");u.setAttribute("id","image-container"),t.appendChild(u),u.textContent="image here";const r=document.createElement("div");r.setAttribute("id","description"),t.appendChild(r),r.textContent="We are an indonesian restuarant that has been in business since 2001. We pride ourselves in serving the most authentic and delicious creations from our home town, Denpasar, Bali. We always cook with love, and are excited to share some of our unique spices with you!"})();