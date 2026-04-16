(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20630,e=>{"use strict";var a=e.i(414),t=e.i(14574);let o=[{id:"air",icon:"✈",label:"By Air",subtitle:"Fly In",accentColor:"#8b5cf6",glowColor:"rgba(139, 92, 246, 0.12)",routes:[{from:"Jolly Grant Airport",code:"DED · Dehradun",distance:"55 km",time:"~1 hr",tip:"Closest airport. Taxi directly to campus.",badge:"Nearest",badgeColor:"#22c55e",steps:["Land at DED","Pre-paid taxi toward Haridwar","NH-334B → IIT Roorkee Main Gate"]},{from:"Indira Gandhi Intl Airport",code:"DEL · New Delhi",distance:"250 km",time:"~5 hrs",tip:"Best global connectivity. Take Shatabdi Express from New Delhi Railway Station.",badge:"Best Flights",badgeColor:"#3b82f6",steps:["Arrive IGI Terminal","Metro to New Delhi Rly Stn","Shatabdi Express → Roorkee (RK)"]},{from:"Chandigarh Airport",code:"IXC · Chandigarh",distance:"160 km",time:"~3 hrs",tip:"Good option for delegates from Punjab & North India.",steps:["Land at IXC","Taxi via NH-73","Roorkee via Saharanpur bypass"]}]},{id:"train",icon:"⊟",label:"By Train",subtitle:"Rail Connect",accentColor:"#c9a96e",glowColor:"rgba(201, 169, 110, 0.12)",routes:[{from:"Roorkee Railway Station",code:"RK · On Doorstep",distance:"2 km",time:"~10 min",tip:"Best option. Walking distance or a 5-minute auto-rickshaw to campus.",badge:"Best Option",badgeColor:"#22c55e",steps:["Board train to Roorkee (RK)","Exit station main gate","Auto-rickshaw to IIT Main Gate"]},{from:"Key Trains from New Delhi",code:"NDLS → RK",distance:"200 km",time:"~2.5 hrs",tip:"Shatabdi Express, Nanda Devi Express, Mussoorie Express, Jan Shatabdi.",steps:["Book on irctc.co.in","Board at New Delhi / Old Delhi","Alight at Roorkee (RK)"]},{from:"Haridwar Junction",code:"HW · Alternate Hub",distance:"25 km",time:"~45 min",tip:"Heavily connected. Take local train or taxi to Roorkee from here.",badge:"Alternate",badgeColor:"#8b5cf6",steps:["Arrive Haridwar Jn.","Taxi / shared auto to Roorkee","Head to Canal Road Gate, IIT"]}]},{id:"road",icon:"⬡",label:"By Road",subtitle:"Drive In",accentColor:"#a78bfa",glowColor:"rgba(167, 139, 250, 0.12)",routes:[{from:"From New Delhi",code:"NH-58 / NH-334",distance:"~200 km",time:"~4–5 hrs",tip:"ISBT Kashmiri Gate has AC Volvo buses to Roorkee / Haridwar.",badge:"Buses Available",badgeColor:"#3b82f6",steps:["NH-58 via Meerut & Muzaffarnagar","Or NH-334 via Haridwar bypass","Canal Road → IIT Main Gate"]},{from:"From Dehradun",code:"Via Haridwar",distance:"~100 km",time:"~2 hrs",tip:"Scenic Himalayan foothills drive. Frequent state buses from ISBT Dehradun.",steps:["ISBT Dehradun → Haridwar","Continue on NH-334B","Roorkee city → IIT Gate"]},{from:"From Haridwar",code:"NH-334B · Quickest",distance:"~25 km",time:"~35 min",tip:"Easiest last leg. Local buses, autos and shared taxis run all day.",badge:"Easiest",badgeColor:"#22c55e",steps:["Head toward Roorkee on NH-334B","Follow IIT Roorkee signage","Enter via Canal Road Main Gate"]}]}];e.s(["default",0,function(){let[e,i]=(0,t.useState)("air"),[r,n]=(0,t.useState)(!0),s=(0,t.useRef)(null),[l,d]=(0,t.useState)(0);(0,t.useEffect)(()=>{let e=()=>d(window.scrollY);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]);let c=o.find(a=>a.id===e);return(0,a.jsxs)("div",{style:{background:"linear-gradient(135deg, #050a14 0%, #1a0f28 100%)",minHeight:"100vh",fontFamily:"'DM Sans', sans-serif",overflowX:"hidden",color:"#fff"},children:[(0,a.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes floatOrb { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-30px) scale(1.04)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes pulseGlow { 0%,100%{opacity:0.5} 50%{opacity:1} }
        @keyframes lineGrow { from{width:0} to{width:100%} }
        @keyframes cardIn { from{opacity:0;transform:translateY(20px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(52px, 9vw, 120px);
          line-height: 0.92;
          letter-spacing: -2px;
          animation: fadeUp 1s cubic-bezier(0.22,1,0.36,1) both;
        }
        .gold-shimmer {
          background: linear-gradient(90deg, #c9a96e, #f0d898, #c9a96e, #e8bc6a, #c9a96e);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .mode-btn {
          position: relative;
          background: transparent;
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: rgba(255,255,255,0.45);
          padding: 14px 32px;
          border-radius: 100px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .mode-btn:hover { color: rgba(255,255,255,0.8); border-color: rgba(139, 92, 246, 0.5); background: rgba(139, 92, 246, 0.05); }
        .mode-btn.active {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.6);
          color: #fff;
        }
        .mode-icon {
          display: inline-block;
          font-size: 18px;
          margin-right: 8px;
          vertical-align: middle;
        }
        .route-card {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(201, 169, 110, 0.04) 100%);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .route-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201, 169, 110, 0.3), transparent);
        }
        .route-card:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(201, 169, 110, 0.08) 100%);
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-3px);
        }
        .step-dot {
          width: 24px; height: 24px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
          flex-shrink: 0;
          font-family: 'Space Mono', monospace;
          background: linear-gradient(135deg, #7c3aed, #6b21a8);
          color: #fff;
          border: 1px solid rgba(139, 92, 246, 0.4);
        }
        .panel-anim {
          animation: ${r?"cardIn 0.35s cubic-bezier(0.22,1,0.36,1) both":"none"};
        }
        .coord-text {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 1px;
          color: rgba(201, 169, 110, 0.5);
        }
        .map-frame {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(139, 92, 246, 0.3);
          position: relative;
        }
        .map-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          box-shadow: inset 0 0 40px rgba(0,0,0,0.5);
          z-index: 1;
          pointer-events: none;
        }
        .section-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(201, 169, 110, 0.7);
        }
        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
          margin: 0;
        }
      `}),(0,a.jsxs)("div",{ref:s,style:{position:"relative",minHeight:"92vh",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"0 clamp(24px,6vw,120px) clamp(56px,8vh,100px)"},children:[(0,a.jsx)("div",{className:"orb",style:{width:600,height:600,background:"rgba(201, 169, 110, 0.1)",top:"-100px",right:"-150px",animation:"floatOrb 9s ease-in-out infinite"}}),(0,a.jsx)("div",{className:"orb",style:{width:400,height:400,background:"rgba(139, 92, 246, 0.08)",bottom:"100px",left:"-80px",animation:"floatOrb 12s ease-in-out infinite 2s"}}),(0,a.jsx)("div",{className:"orb",style:{width:250,height:250,background:"rgba(107, 33, 168, 0.08)",top:"30%",left:"40%",animation:"floatOrb 7s ease-in-out infinite 1s"}}),(0,a.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",backgroundSize:"80px 80px",pointerEvents:"none"}}),(0,a.jsxs)("div",{style:{position:"absolute",top:40,left:"clamp(24px,6vw,120px)",display:"flex",alignItems:"center",gap:12,animation:"fadeUp 0.8s ease both 0.1s"},children:[(0,a.jsx)("div",{style:{width:32,height:32,borderRadius:8,border:"1px solid rgba(139, 92, 246, 0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)("div",{style:{width:12,height:12,background:"linear-gradient(135deg, #8b5cf6, #c9a96e)",borderRadius:3}})}),(0,a.jsx)("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:11,letterSpacing:2,color:"rgba(255,255,255,0.3)",textTransform:"uppercase"},children:"IIT Roorkee"})]}),(0,a.jsxs)("div",{style:{transform:`translateY(${.25*l}px)`,willChange:"transform"},children:[(0,a.jsx)("p",{className:"section-eyebrow",style:{marginBottom:24,animation:"fadeUp 0.8s ease both 0.2s"},children:"International Conference · Travel Guide"}),(0,a.jsxs)("h1",{className:"hero-title",children:[(0,a.jsx)("span",{style:{display:"block",color:"rgba(255,255,255,0.9)",animation:"fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both 0.3s"},children:"How to"}),(0,a.jsx)("span",{className:"gold-shimmer",style:{display:"block"},children:"Reach"}),(0,a.jsx)("span",{style:{display:"block",color:"rgba(255,255,255,0.55)",fontStyle:"italic",fontSize:"0.75em",animation:"fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both 0.5s"},children:"IIT Roorkee"})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:20,marginTop:36,animation:"fadeUp 0.9s ease both 0.7s"},children:[(0,a.jsx)("div",{style:{width:48,height:1,background:"rgba(139, 92, 246, 0.6)"}}),(0,a.jsx)("p",{style:{fontSize:15,color:"rgba(255,255,255,0.4)",fontWeight:300,letterSpacing:.5},children:"Asia's Oldest Technical Institute · Est. 1847"}),(0,a.jsx)("div",{style:{width:48,height:1,background:"rgba(139, 92, 246, 0.6)"}})]})]}),(0,a.jsxs)("div",{style:{position:"absolute",bottom:40,right:"clamp(24px,6vw,120px)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,animation:"fadeUp 1s ease both 1.2s"},children:[(0,a.jsx)("span",{className:"coord-text",children:"29.8646° N, 77.8883° E"}),(0,a.jsx)("div",{style:{width:1,height:40,background:"linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)",animation:"pulseGlow 2s ease infinite"}})]})]}),(0,a.jsx)("div",{className:"divider-line"}),(0,a.jsxs)("div",{style:{padding:"clamp(60px,8vh,100px) clamp(24px,6vw,120px)"},children:[(0,a.jsx)("div",{style:{display:"flex",gap:12,marginBottom:56,flexWrap:"wrap",animation:"fadeUp 0.7s ease both 0.1s"},children:o.map(t=>(0,a.jsxs)("button",{className:`mode-btn${e===t.id?" active":""}`,onClick:()=>{var e;return e=t.id,void(n(!1),setTimeout(()=>{i(e),n(!0)},180))},style:{borderColor:e===t.id?`${t.accentColor}50`:void 0,color:e===t.id?t.accentColor:void 0},children:[(0,a.jsx)("span",{className:"mode-icon",children:t.icon}),t.label]},t.id))}),(0,a.jsxs)("div",{className:"panel-anim",children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:40,flexWrap:"wrap",gap:16},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{style:{fontFamily:"'Space Mono', monospace",fontSize:11,letterSpacing:3,color:c.accentColor,marginBottom:10,textTransform:"uppercase",opacity:.8},children:c.subtitle}),(0,a.jsx)("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,lineHeight:1,color:"#fff"},children:c.label})]}),(0,a.jsx)("div",{style:{width:64,height:64,borderRadius:"50%",border:`1px solid ${c.accentColor}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,background:c.glowColor},children:c.icon})]}),(0,a.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:20},children:c.routes.map((e,t)=>(0,a.jsxs)("div",{className:"route-card",style:{animationDelay:`${.08*t}s`},children:[(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{style:{fontSize:16,fontWeight:500,color:"#fff",marginBottom:4,lineHeight:1.3},children:e.from}),e.code&&(0,a.jsx)("span",{style:{fontFamily:"'Space Mono', monospace",fontSize:10,color:"rgba(255,255,255,0.3)",letterSpacing:1},children:e.code})]}),e.badge&&(0,a.jsx)("span",{style:{fontSize:10,fontWeight:600,padding:"4px 10px",borderRadius:100,background:`${e.badgeColor}18`,color:e.badgeColor,border:`1px solid ${e.badgeColor}30`,whiteSpace:"nowrap",flexShrink:0,marginLeft:8},children:e.badge})]}),(0,a.jsxs)("div",{style:{display:"flex",gap:24,marginBottom:16,paddingBottom:16,borderBottom:"1px solid rgba(255,255,255,0.05)"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{fontSize:11,color:"rgba(255,255,255,0.3)",marginBottom:3,fontWeight:500,letterSpacing:.5},children:"DISTANCE"}),(0,a.jsx)("div",{style:{fontSize:18,fontFamily:"'Cormorant Garamond', serif",color:c.accentColor},children:e.distance})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{fontSize:11,color:"rgba(255,255,255,0.3)",marginBottom:3,fontWeight:500,letterSpacing:.5},children:"TRAVEL TIME"}),(0,a.jsx)("div",{style:{fontSize:18,fontFamily:"'Cormorant Garamond', serif",color:"#fff"},children:e.time})]})]}),(0,a.jsx)("p",{style:{fontSize:13,color:"rgba(255,255,255,0.45)",lineHeight:1.6,marginBottom:16*!!e.steps},children:e.tip}),e.steps&&(0,a.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:e.steps.map((e,t)=>(0,a.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:10},children:[(0,a.jsx)("div",{className:"step-dot",style:{background:`${c.accentColor}20`,color:c.accentColor,border:`1px solid ${c.accentColor}30`},children:t+1}),(0,a.jsx)("span",{style:{fontSize:12.5,color:"rgba(255,255,255,0.5)",lineHeight:1.55,paddingTop:4},children:e})]},t))})]},t))})]},e)]}),(0,a.jsx)("div",{className:"divider-line"}),(0,a.jsx)("div",{style:{padding:"clamp(60px,8vh,100px) clamp(24px,6vw,120px)"},children:(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:48,alignItems:"center"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"section-eyebrow",style:{marginBottom:16,color:"rgba(201, 169, 110, 0.7)"},children:"Find Us"}),(0,a.jsxs)("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px,4vw,56px)",fontWeight:300,lineHeight:1.1,marginBottom:24},children:["Campus",(0,a.jsx)("br",{}),(0,a.jsx)("em",{children:"Location"})]}),(0,a.jsx)("p",{style:{fontSize:14,color:"rgba(255,255,255,0.4)",lineHeight:1.7,marginBottom:24},children:"IIT Roorkee sits in the heart of Roorkee city, Uttarakhand — at the foothills of the Himalayas, on the banks of the historic Ganges Canal."}),(0,a.jsxs)("div",{style:{padding:"16px 20px",background:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.25)",borderRadius:12},children:[(0,a.jsx)("div",{className:"coord-text",style:{color:"rgba(201, 169, 110, 0.7)",marginBottom:6},children:"ADDRESS"}),(0,a.jsxs)("p",{style:{fontSize:13,color:"rgba(255,255,255,0.6)",lineHeight:1.6},children:["IIT Roorkee",(0,a.jsx)("br",{}),"Canal Road, Roorkee",(0,a.jsx)("br",{}),"Uttarakhand 247667",(0,a.jsx)("br",{}),"India"]})]})]}),(0,a.jsx)("div",{className:"map-frame",children:(0,a.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.856!2d77.8883!3d29.8646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3755d90aae3%3A0xf24b2f3ea3c0ee34!2sIIT%20Roorkee!5e0!3m2!1sen!2sin!4v1700000000",width:"100%",height:"420",style:{border:"none",display:"block",filter:"grayscale(20%) contrast(1.1)"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"IIT Roorkee Campus Map"})})]})}),(0,a.jsxs)("div",{style:{borderTop:"1px solid rgba(255,255,255,0.05)",padding:"32px clamp(24px,6vw,120px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16},children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,a.jsx)("div",{style:{width:28,height:28,borderRadius:7,border:"1px solid rgba(139, 92, 246, 0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)("div",{style:{width:10,height:10,background:"linear-gradient(135deg, #8b5cf6, #c9a96e)",borderRadius:2}})}),(0,a.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:15,color:"rgba(255,255,255,0.5)"},children:"IIT Roorkee — Est. 1847"})]}),(0,a.jsx)("span",{className:"coord-text",children:"Roorkee, Uttarakhand · India"})]}),(0,a.jsxs)("div",{style:{padding:"32px",textAlign:"center",display:"flex",gap:"16px",justifyContent:"center"},children:[(0,a.jsx)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{background:"#1e40af",color:"white",padding:"12px 32px",borderRadius:"8px",border:"none",fontWeight:"bold",cursor:"pointer"},children:"⬆️ Back to Top"}),(0,a.jsx)("a",{href:"/",style:{background:"#4b5563",color:"white",padding:"12px 32px",borderRadius:"8px",textDecoration:"none",fontWeight:"bold",display:"inline-block"},children:"🏠 Back to Homepage"})]})]})}])}]);