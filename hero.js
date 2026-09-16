/* Original procedural gold animation; no third-party media is required. */
(() => {
 const hero=document.querySelector('.gold-hero'),canvas=document.getElementById('gold-wave'),toggle=document.getElementById('wave-toggle');
 if(!hero||!canvas)return;
 const gl=canvas.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});if(!gl)return;
 const vertex='attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}';
 const fragment=`precision mediump float;
 uniform vec2 resolution;uniform float time;uniform vec2 pointer;
 void main(){
 vec2 uv=gl_FragCoord.xy/resolution;
 float x=uv.x;float t=time*.22;
 float crest=.18+.55*x-.18*sin(x*5.0-t)+.025*sin(x*10.+t*.7);
 crest+=pointer.y*.015+pointer.x*.02*sin(x*4.);
 float d=crest-uv.y;
 float mask=smoothstep(-.009,.008,d);
 float fold=d*10.+.55*sin(x*5.-t*.6)+.18*sin(x*12.+t);
 float ridge=pow(.5+.5*cos(fold*3.3),10.);
 float sheen=pow(.5+.5*sin(fold*1.7+.7),3.);
 vec3 gold=mix(vec3(.13,.095,.035),vec3(.79,.66,.42),sheen);
 gold+=vec3(.96,.90,.72)*ridge*.72;
 float edge=exp(-abs(d)*155.);
 gold+=edge*vec3(1.,.96,.84)*.8;
 float champagne=(1.-smoothstep(.05,.47,x))*(.30+.42*sheen);
 gold=mix(gold,vec3(.20,.15,.065)+ridge*vec3(.93,.84,.63),champagne);
 gold*=.72+.28*smoothstep(.02,.6,uv.y);
 vec3 col=mix(vec3(.009,.009,.008),gold,mask);
 col*=1.-.3*pow(abs(x-.5)*1.5,2.);
 gl_FragColor=vec4(col,1.);
 }`;
 function compile(type,source){const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){gl.deleteShader(s);return null}return s}
 const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);if(!vs||!fs)return;
 const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;gl.useProgram(program);
 const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
 const position=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
 const uniforms={resolution:gl.getUniformLocation(program,'resolution'),time:gl.getUniformLocation(program,'time'),pointer:gl.getUniformLocation(program,'pointer')};
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)');
 let paused=reduced.matches,visible=true,raf=0,last=0,elapsed=0,lost=false,px=0,py=0;
 function draw(){if(lost)return;gl.uniform2f(uniforms.resolution,canvas.width,canvas.height);gl.uniform1f(uniforms.time,elapsed);gl.uniform2f(uniforms.pointer,px,py);gl.drawArrays(gl.TRIANGLES,0,6)}
 function resize(){const ratio=Math.min(devicePixelRatio||1,innerWidth<700?1:1.5);canvas.width=Math.round(hero.clientWidth*ratio);canvas.height=Math.round(hero.clientHeight*ratio);gl.viewport(0,0,canvas.width,canvas.height);draw()}
 function tick(now){raf=0;if(paused||!visible||document.hidden||lost)return;if(!last)last=now;if(now-last>=32){elapsed+=Math.min((now-last)/1000,.1);last=now;draw()}raf=requestAnimationFrame(tick)}
 function sync(){cancelAnimationFrame(raf);raf=0;last=0;toggle.textContent=paused?'Play animation':'Pause animation';toggle.setAttribute('aria-pressed',String(paused));if(!paused&&visible&&!document.hidden&&!lost)raf=requestAnimationFrame(tick)}
 toggle.hidden=false;toggle.addEventListener('click',()=>{paused=!paused;sync()});
 reduced.addEventListener('change',e=>{paused=e.matches;sync()});document.addEventListener('visibilitychange',sync);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()},{threshold:0}).observe(hero);new ResizeObserver(resize).observe(hero);
 hero.addEventListener('pointermove',e=>{if(!fine.matches||paused)return;const r=hero.getBoundingClientRect();px=(e.clientX-r.left)/r.width-.5;py=(e.clientY-r.top)/r.height-.5},{passive:true});
 hero.addEventListener('pointerleave',()=>{px=py=0});
 canvas.addEventListener('webglcontextlost',()=>{lost=true;cancelAnimationFrame(raf);hero.classList.remove('wave-ready');toggle.hidden=true});
 resize();hero.classList.add('wave-ready');sync();
})();
(() => {
 const menu=document.getElementById('navOffcanvas');if(!menu)return;
 menu.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{
 const target=document.getElementById(link.hash.slice(1));if(!target||!window.bootstrap)return;
 menu.addEventListener('hidden.bs.offcanvas',()=>{target.setAttribute('tabindex','-1');target.focus({preventScroll:true});target.scrollIntoView({behavior:'auto',block:'start'})},{once:true});
 window.bootstrap.Offcanvas.getInstance(menu)?.hide();
 }));
})();
