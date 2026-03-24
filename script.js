// ===== CONSTANTS =====
const MONTHS=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const DATA_VERSION=2;
const CC={'Alimentação':'#00e5b4','Compras':'#7c5cfc','Carro':'#ff6b6b','Contas':'#ffc542','Transporte':'#4fc3f7','Saude':'#f06292','Cartão':'#a5d6a7','Estudos':'#ffb74d','Outro':'#90a4ae','Salário':'#69f0ae','Freelance':'#b2ff59','Investimento':'#40c4ff','Vale':'#ea80fc','Empréstimo Recebido':'#ff6e40'};
const CE={'Alimentação':'🍽️','Compras':'🛍️','Carro':'🚗','Contas':'📄','Transporte':'🚌','Saude':'💊','Cartão':'💳','Estudos':'📚','Outro':'📦','Salário':'💼','Freelance':'💻','Investimento':'📈','Vale':'🎁','Empréstimo Recebido':'🤝'};
const AC={'uber':'Transporte','99':'Transporte','onibus':'Transporte','trem':'Transporte','metro':'Transporte','ifood':'Alimentação','kfc':'Alimentação','mcdonalds':'Alimentação','cafe':'Alimentação','padaria':'Alimentação','mercado':'Alimentação','restaurante':'Alimentação','lanche':'Alimentação','gasolina':'Carro','combustivel':'Carro','mecanico':'Carro','netflix':'Contas','spotify':'Contas','internet':'Contas','luz':'Contas','agua':'Contas','aluguel':'Contas','vivo':'Contas','drive':'Contas','farmacia':'Saude','remedio':'Saude','medico':'Saude','salario':'Salário','freelance':'Freelance'};

// ===== SEED DATA =====
const SEED=[
  {id:'jr1',month:'Janeiro',date:'2026-01-05',type:'entrada',category:'Salário',description:'Salário',value:2182.95},
  {id:'j1',month:'Janeiro',date:'2026-01-01',type:'saida',category:'Contas',description:'Drive',value:9.99},
  {id:'j2',month:'Janeiro',date:'2026-01-01',type:'saida',category:'Contas',description:'Vivo',value:45.33},
  {id:'j3',month:'Janeiro',date:'2026-01-02',type:'saida',category:'Alimentação',description:'iFood',value:50.49},
  {id:'j4',month:'Janeiro',date:'2026-01-02',type:'saida',category:'Carro',description:'Gasolina',value:30},
  {id:'j5',month:'Janeiro',date:'2026-01-04',type:'saida',category:'Alimentação',description:'Barra de Cereal',value:2.99},
  {id:'j6',month:'Janeiro',date:'2026-01-04',type:'saida',category:'Alimentação',description:'Barra de Cereal',value:2.99},
  {id:'j7',month:'Janeiro',date:'2026-01-04',type:'saida',category:'Alimentação',description:'Chocolate',value:9.74},
  {id:'j8',month:'Janeiro',date:'2026-01-05',type:'saida',category:'Alimentação',description:'Ração dos Gatos',value:13.99},
  {id:'j9',month:'Janeiro',date:'2026-01-05',type:'saida',category:'Contas',description:'Seguro do Cartão',value:5.99},
  {id:'j10',month:'Janeiro',date:'2026-01-06',type:'saida',category:'Carro',description:'Gasolina',value:20},
  {id:'j11',month:'Janeiro',date:'2026-01-06',type:'saida',category:'Carro',description:'Gasolina',value:20},
  {id:'j12',month:'Janeiro',date:'2025-12-09',type:'saida',category:'Compras',description:'Presente do Keke',value:120},
  {id:'j13',month:'Janeiro',date:'2025-12-13',type:'saida',category:'Compras',description:'Depilador a Laser',value:51.2},
  {id:'j14',month:'Janeiro',date:'2025-12-13',type:'saida',category:'Alimentação',description:'Pearl TML',value:36.98},
  {id:'j15',month:'Janeiro',date:'2025-12-14',type:'saida',category:'Saude',description:'Farmácia',value:12.59},
  {id:'j16',month:'Janeiro',date:'2025-12-17',type:'saida',category:'Alimentação',description:'Mercado',value:4},
  {id:'j17',month:'Janeiro',date:'2025-12-17',type:'saida',category:'Compras',description:'Mercado do Um Real',value:35.97},
  {id:'j18',month:'Janeiro',date:'2025-12-17',type:'saida',category:'Carro',description:'Gasolina',value:20},
  {id:'j19',month:'Janeiro',date:'2025-12-20',type:'saida',category:'Alimentação',description:'Cacau Show',value:80},
  {id:'j20',month:'Janeiro',date:'2025-12-08',type:'saida',category:'Compras',description:'Presente do Matheus',value:70.24},
  {id:'j21',month:'Janeiro',date:'2025-12-12',type:'saida',category:'Compras',description:'Meli+',value:39.9},
  {id:'j22',month:'Janeiro',date:'2025-12-12',type:'saida',category:'Compras',description:'MultiMidia',value:60},
  {id:'j23',month:'Janeiro',date:'2025-12-12',type:'saida',category:'Alimentação',description:'KFC',value:128},
  {id:'j24',month:'Janeiro',date:'2025-12-12',type:'saida',category:'Contas',description:'Assinatura Mercado Pago',value:39.9},
  {id:'j25',month:'Janeiro',date:'2026-01-05',type:'saida',category:'Alimentação',description:'Boa - Mercado Pago',value:4.69},
  {id:'j26',month:'Janeiro',date:'2026-01-05',type:'saida',category:'Alimentação',description:'Suco de Cana',value:75.5},
  {id:'j27',month:'Janeiro',date:'2025-12-09',type:'saida',category:'Transporte',description:'Transurb',value:6.15},
  {id:'j28',month:'Janeiro',date:'2025-12-08',type:'saida',category:'Compras',description:'Garrafinha',value:7},
  {id:'j29',month:'Janeiro',date:'2025-12-09',type:'saida',category:'Transporte',description:'Transurb',value:10.14},
  {id:'j30',month:'Janeiro',date:'2025-12-09',type:'saida',category:'Compras',description:'Loja de 4 Reais',value:104},
  {id:'j31',month:'Janeiro',date:'2025-12-08',type:'saida',category:'Alimentação',description:'Lanche',value:12},
  {id:'j32',month:'Janeiro',date:'2025-12-09',type:'saida',category:'Compras',description:'Presente do Ycaro (Roblox)',value:12},
  {id:'j33',month:'Janeiro',date:'2025-10-27',type:'saida',category:'Compras',description:'Empréstimo Pearl',value:52.16},
  {id:'j34',month:'Janeiro',date:'2025-11-04',type:'saida',category:'Compras',description:'Empréstimo Pessoal',value:6.58},
  {id:'j35',month:'Janeiro',date:'2025-12-14',type:'saida',category:'Compras',description:'Compras da Giovana',value:32.44},
  {id:'j36',month:'Janeiro',date:'2025-12-16',type:'saida',category:'Compras',description:'Presentes de Natal',value:56.45,inst:{n:4,c:1}},
  {id:'j37',month:'Janeiro',date:'2025-08-01',type:'saida',category:'Compras',description:'Panela (Silene)',value:168.86,inst:{n:6,c:5}},
  {id:'j38',month:'Janeiro',date:'2025-09-30',type:'saida',category:'Cartão',description:'Parcela Fatura MP',value:201.73,inst:{n:6,c:4}},
  {id:'j39',month:'Janeiro',date:'2025-11-28',type:'saida',category:'Compras',description:'Compras diversas',value:66.31},
  {id:'j40',month:'Janeiro',date:'2025-12-08',type:'saida',category:'Compras',description:'Compras no centro',value:29.9},
  {id:'j41',month:'Janeiro',date:'2025-10-10',type:'saida',category:'Cartão',description:'Parcela Itaú',value:107.47,inst:{n:4,c:3}},
  {id:'j42',month:'Janeiro',date:'2025-11-08',type:'saida',category:'Carro',description:'Serginho - Conserto',value:142.02},
  {id:'fr1',month:'Fevereiro',date:'2026-02-05',type:'entrada',category:'Salário',description:'Salário',value:225},
  {id:'fr2',month:'Fevereiro',date:'2026-02-10',type:'entrada',category:'Outro',description:'Giovana',value:120},
  {id:'fr3',month:'Fevereiro',date:'2026-02-10',type:'entrada',category:'Outro',description:'Silene',value:25},
  {id:'f1',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Carro',description:'Bateria do Carro (Olivia)',value:1000},
  {id:'f2',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Alimentação',description:'Coca-Cola',value:10},
  {id:'f3',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Carro',description:'Gasolina',value:30},
  {id:'f4',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Transporte',description:'Trem',value:43.2},
  {id:'f5',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'Nutrilis Clínica',value:26},
  {id:'f6',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'STB',value:25},
  {id:'f7',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'Eliane',value:16},
  {id:'f8',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Carro',description:'Serginho - Conserto',value:269},
  {id:'f9',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Carro',description:'Carro - Empréstimo',value:81},
  {id:'f10',month:'Fevereiro',date:'2026-01-16',type:'saida',category:'Alimentação',description:'iFood',value:49.88},
  {id:'f11',month:'Fevereiro',date:'2026-01-18',type:'saida',category:'Contas',description:'Meli+',value:74.9},
  {id:'f12',month:'Fevereiro',date:'2026-01-20',type:'saida',category:'Carro',description:'Gasolina',value:20},
  {id:'f13',month:'Fevereiro',date:'2026-01-21',type:'saida',category:'Compras',description:'Dinheiro Extra',value:117},
  {id:'f14',month:'Fevereiro',date:'2026-01-21',type:'saida',category:'Compras',description:'Brechó',value:61},
  {id:'f15',month:'Fevereiro',date:'2026-01-22',type:'saida',category:'Carro',description:'Gasolina',value:40},
  {id:'f16',month:'Fevereiro',date:'2026-01-27',type:'saida',category:'Contas',description:'Drive',value:19.9},
  {id:'f17',month:'Fevereiro',date:'2026-01-27',type:'saida',category:'Contas',description:'Telefone',value:44},
  {id:'f18',month:'Fevereiro',date:'2026-01-28',type:'saida',category:'Alimentação',description:'Pão de Queijo',value:9},
  {id:'f19',month:'Fevereiro',date:'2026-01-28',type:'saida',category:'Alimentação',description:'Refrigerante',value:7},
  {id:'f20',month:'Fevereiro',date:'2026-01-29',type:'saida',category:'Carro',description:'Gasolina',value:25},
  {id:'f21',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'Compras Brás - Unha',value:54.06},
  {id:'f22',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'Compras Brás - Beleza',value:62.66},
  {id:'f23',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'Compras Brás - Acessórios',value:32.86},
  {id:'f24',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'Compras Brás - Bolsa',value:95.4},
  {id:'f25',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'Compras Brás - Papelaria',value:44.1},
  {id:'f26',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'Compras Brás - Celular',value:32},
  {id:'f27',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Compras',description:'Compras Brás - Papelaria II',value:34.98},
  {id:'f28',month:'Fevereiro',date:'2026-01-08',type:'saida',category:'Alimentação',description:'Café da Manhã (Brás)',value:30},
  {id:'f29',month:'Fevereiro',date:'2026-01-10',type:'saida',category:'Transporte',description:'Transurb',value:6.15},
  {id:'f30',month:'Fevereiro',date:'2026-01-12',type:'saida',category:'Alimentação',description:'Café Notre Dame',value:9.89},
  {id:'f31',month:'Fevereiro',date:'2026-01-14',type:'saida',category:'Transporte',description:'99',value:5.6},
  {id:'f32',month:'Fevereiro',date:'2026-01-14',type:'saida',category:'Transporte',description:'99',value:3},
  {id:'f33',month:'Fevereiro',date:'2026-01-16',type:'saida',category:'Alimentação',description:'Café Jundiaí',value:15},
  {id:'f34',month:'Fevereiro',date:'2026-01-21',type:'saida',category:'Alimentação',description:'Cantina',value:3.5},
  {id:'f35',month:'Fevereiro',date:'2026-01-21',type:'saida',category:'Transporte',description:'Uber',value:6.52},
  {id:'f36',month:'Fevereiro',date:'2026-01-21',type:'saida',category:'Alimentação',description:'Café Jundiaí',value:8.5},
  {id:'f37',month:'Fevereiro',date:'2026-01-26',type:'saida',category:'Transporte',description:'Uber',value:4.14},
  {id:'f38',month:'Fevereiro',date:'2025-10-10',type:'saida',category:'Cartão',description:'Parcela Itaú',value:107.47,inst:{n:4,c:4}},
  {id:'f39',month:'Fevereiro',date:'2025-12-16',type:'saida',category:'Compras',description:'Presentes de Natal',value:56.45,inst:{n:4,c:2}},
  {id:'f40',month:'Fevereiro',date:'2026-01-06',type:'saida',category:'Alimentação',description:'Alimentação diversa',value:33.3},
];

// ===== STORAGE SERVICE =====
const S={
  save(d){try{localStorage.setItem('fin2026v2',JSON.stringify({v:DATA_VERSION,d}));}catch(e){}},
  load(){try{const r=localStorage.getItem('fin2026v2');if(r){const p=JSON.parse(r);if(p.v===DATA_VERSION)return p.d;}}catch(e){}return null;},
  meta(k,v){if(v!==undefined){try{localStorage.setItem('fm_'+k,v);}catch(e){}}else{try{const x=localStorage.getItem('fm_'+k);return x!==null?parseFloat(x):null;}catch(e){return null;}}},
  pref(k,v){if(v!==undefined){try{localStorage.setItem('fp_'+k,v);}catch(e){}}else{try{return localStorage.getItem('fp_'+k);}catch(e){return null;}}},
  json(k,v){if(v!==undefined){try{localStorage.setItem('fj_'+k,JSON.stringify(v));}catch(e){}}else{try{const x=localStorage.getItem('fj_'+k);return x?JSON.parse(x):null;}catch(e){return null;}}}
};

// ===== CALCULATION SERVICE =====
const C={
  exp(entries,m){return entries.filter(e=>e.month===m&&e.type==='saida');},
  inc(entries,m){return entries.filter(e=>e.month===m&&e.type==='entrada');},
  all(entries,m){return entries.filter(e=>e.month===m);},
  sum(arr){return arr.reduce((s,e)=>s+e.value,0);},
  byCat(arr){const m={};arr.forEach(e=>{m[e.category]=(m[e.category]||0)+e.value;});return m;},
  kpis(entries,month,allMonths){
    const exp=this.exp(entries,month),inc=this.inc(entries,month);
    const te=this.sum(exp),ti=this.sum(inc),sal=ti-te;
    const byCat=this.byCat(exp);
    const top=Object.entries(byCat).sort((a,b)=>b[1]-a[1])[0];
    const idx=allMonths.indexOf(month);
    const prev=idx>0?allMonths[idx-1]:null;
    const pe=prev?this.sum(this.exp(entries,prev)):null;
    const diff=pe?((te-pe)/pe*100):null;
    return{te,ti,sal,avg:exp.length?te/exp.length:0,top,prev,pe,diff,eco:ti>0?(sal/ti*100):null,cnt:exp.length};
  },
  accBal(entries,months){let a=0;return months.map(m=>{const i=this.sum(this.inc(entries,m)),e=this.sum(this.exp(entries,m));a+=i-e;return{month:m,s:a};});},
  forecast(entries,month){const exp=this.exp(entries,month);const day=new Date().getDate();const daily=exp.length?this.sum(exp)/Math.max(day,1):0;return{daily,forecast:daily*30,day};},
  insights(entries,month,goals){
    const exp=this.exp(entries,month),inc=this.inc(entries,month);
    const te=this.sum(exp),ti=this.sum(inc);
    const byCat=this.byCat(exp);
    const out=[];
    const months=[...new Set(entries.map(e=>e.month))];
    const idx=months.indexOf(month);
    if(idx>0){const pb=this.byCat(this.exp(entries,months[idx-1]));Object.entries(byCat).forEach(([cat,val])=>{const pv=pb[cat]||0;if(pv>0&&val>pv*1.3)out.push({t:'w',msg:`${CE[cat]||''} ${cat} +${((val-pv)/pv*100).toFixed(0)}% vs mês anterior`});});}
    if(ti>0&&te>ti)out.push({t:'w',msg:`⚠️ Gastos superam receitas em R$ ${fmt(te-ti)}`});
    else if(ti>0&&te<ti*.7)out.push({t:'ok',msg:`✅ Ótimo! Economizando ${((1-te/ti)*100).toFixed(0)}% da renda`});
    Object.entries(goals).forEach(([cat,goal])=>{const s=byCat[cat]||0;if(goal>0&&s>goal)out.push({t:'w',msg:`🚨 Meta ${cat} estourada! R$${fmt(s)}/R$${fmt(goal)}`});else if(goal>0&&s>goal*.85)out.push({t:'y',msg:`⚡ ${cat}: ${(s/goal*100).toFixed(0)}% da meta`});});
    if(!out.length)out.push({t:'i',msg:'📊 Tudo sob controle este mês'});
    return out.slice(0,4);
  }
};

// ===== STATE =====
let ST={entries:[],month:'Janeiro',page:1,pp:12,formOpen:false,ftype:'saida',editId:null,goals:{},recurring:[],srch:''};
let charts={pie:null,bar:null,sal:null};
let srchTimer=null;

// ===== INIT =====
function init(){
  const stored=S.load();
  ST.entries=stored||[...SEED];
  if(!stored)S.save(ST.entries);
  ST.goals=S.json('goals')||{Alimentação:500,Compras:400,Carro:300,Contas:200,Transporte:100};
  ST.recurring=S.json('recurring')||[{id:'r1',name:'Drive Google',cat:'Contas',val:9.99},{id:'r2',name:'Vivo',cat:'Contas',val:45.33}];
  const theme=S.pref('theme')||'dark';
  if(theme==='light'){document.documentElement.setAttribute('data-theme','light');document.getElementById('themeBtn').textContent='☀️';}
  document.getElementById('fDate').value=new Date().toISOString().split('T')[0];
  renderMonthNav();popMonth();render();
}

function activeMonths(){const s=new Set(ST.entries.map(e=>e.month));return MONTHS.filter(m=>s.has(m));}
function renderMonthNav(){const a=activeMonths();if(!a.includes(ST.month)&&a.length)ST.month=a[a.length-1];document.getElementById('monthNav').innerHTML=a.map(m=>`<button class="month-btn ${m===ST.month?'active':''}" onclick="setMonth('${m}')">${m}</button>`).join('')+`<button class="month-btn add-m" onclick="newMonth()">+ Mês</button>`;}
function popMonth(){document.getElementById('fMonth').innerHTML=MONTHS.map(m=>`<option value="${m}" ${m===ST.month?'selected':''}>${m}</option>`).join('');}
function setMonth(m){ST.month=m;ST.page=1;renderMonthNav();render();}
function newMonth(){const ex=activeMonths();const rem=MONTHS.filter(m=>!ex.includes(m));if(!rem.length){toast('Todos os meses já existem!');return;}ST.month=rem[0];renderMonthNav();popMonth();document.getElementById('fMonth').value=rem[0];openForm('saida');toast(`Mês ${rem[0]} criado!`);}

// ===== RENDER =====
function fmt(v){return Number(v).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});}

function render(){
  const allE=ST.entries.filter(e=>e.type==='saida'),allI=ST.entries.filter(e=>e.type==='entrada');
  document.getElementById('hsum').innerHTML=`Receitas 2026: <strong>R$ ${fmt(allI.reduce((s,e)=>s+e.value,0))}</strong> · Gastos: <strong style="color:var(--accent3)">R$ ${fmt(allE.reduce((s,e)=>s+e.value,0))}</strong>`;
  renderKPIs();renderInsights();renderForecast();renderCharts();renderCatList();renderGoals();renderRecurring();renderTable();renderMonthNav();
}

function renderKPIs(){
  const ms=activeMonths();const k=C.kpis(ST.entries,ST.month,ms);
  const meta=S.meta(ST.month)||2500;const mp=Math.min(k.te/meta*100,100);
  document.getElementById('kpiGrid').innerHTML=`
    <div class="kpi"><div class="kpi-lbl">Total Gastos</div><div class="kpi-val ${k.te>meta?'r':'p'}">R$ ${fmt(k.te)}</div><div class="kpi-sub">${k.cnt} lançamentos</div><div class="kpi-bar"><div class="kpi-bar-f" style="width:${mp}%;background:${k.te>meta?'var(--accent3)':'var(--accent)'}"></div></div></div>
    <div class="kpi"><div class="kpi-lbl">Total Receitas</div><div class="kpi-val g">R$ ${fmt(k.ti)}</div><div class="kpi-sub">${C.inc(ST.entries,ST.month).length} entradas</div></div>
    <div class="kpi"><div class="kpi-lbl">Saldo do Mês</div><div class="kpi-val ${k.sal>=0?'g':'r'}">${k.sal>=0?'+':''}R$ ${fmt(k.sal)}</div><div class="kpi-sub">${k.eco!==null?`Economia: ${k.eco.toFixed(1)}%`:'Sem receitas'}</div></div>
    <div class="kpi c" onclick="editMeta()"><div class="kpi-lbl">Meta de Gastos ✎</div><div class="kpi-val y">R$ ${fmt(meta)}</div><div class="kpi-sub">${mp.toFixed(0)}% utilizado</div><div class="kpi-bar"><div class="kpi-bar-f" style="width:${mp}%;background:var(--accent4)"></div></div></div>
    <div class="kpi"><div class="kpi-lbl">Ticket Médio</div><div class="kpi-val p">R$ ${fmt(k.avg)}</div><div class="kpi-sub">por gasto</div></div>
    <div class="kpi"><div class="kpi-lbl">Vs Anterior</div><div class="kpi-val ${k.diff===null?'':k.diff>0?'r':'g'}">${k.diff===null?'—':(k.diff>0?'▲ ':'▼ ')+Math.abs(k.diff).toFixed(1)+'%'}</div><div class="kpi-sub">${k.prev?`${k.prev}: R$ ${fmt(k.pe)}`:'1º mês'}</div></div>
    <div class="kpi"><div class="kpi-lbl">Maior Gasto</div><div class="kpi-val" style="color:${k.top?CC[k.top[0]]||'#aaa':'#aaa'};font-size:13px;">${k.top?(CE[k.top[0]]||'')+' '+k.top[0]:'—'}</div><div class="kpi-sub">${k.top?'R$ '+fmt(k.top[1]):''}</div></div>
  `;
}

function editMeta(){const m=S.meta(ST.month)||2500;const v=prompt(`Meta de gastos — ${ST.month} (R$):`,m.toFixed(2).replace('.',','));if(v!==null){const n=parseFloat(v.replace(',','.'));if(!isNaN(n)&&n>0){S.meta(ST.month,n);renderKPIs();toast(`Meta: R$ ${fmt(n)}`);}}};

function renderInsights(){const ins=C.insights(ST.entries,ST.month,ST.goals);const cls={w:'w',ok:'ok',i:'i',y:'y'};document.getElementById('ibar').innerHTML=ins.map(i=>`<div class="chip ${cls[i.t]}">${i.msg}</div>`).join('');}

function renderForecast(){const f=C.forecast(ST.entries,ST.month);const meta=S.meta(ST.month)||2500;const rem=Math.max(30-f.day,0);document.getElementById('fcrow').innerHTML=`<div class="fc-card"><div class="fl">💸 Média Diária</div><div class="fv p">R$ ${fmt(f.daily)}</div></div><div class="fc-card"><div class="fl">📅 Previsão do Mês</div><div class="fv ${f.forecast>meta?'r':'y'}">R$ ${fmt(f.forecast)}</div></div><div class="fc-card"><div class="fl">⏳ Restante Estimado</div><div class="fv" style="color:var(--text-dim)">R$ ${fmt(f.daily*rem)}</div></div>`;}

function renderCharts(){
  const exp=C.exp(ST.entries,ST.month);const byCat=C.byCat(exp);
  const cats=Object.keys(byCat),vals=cats.map(c=>byCat[c]),colors=cats.map(c=>CC[c]||'#90a4ae');
  if(charts.pie)charts.pie.destroy();
  charts.pie=new Chart(document.getElementById('pieChart').getContext('2d'),{type:'doughnut',data:{labels:cats,datasets:[{data:vals,backgroundColor:colors,borderWidth:2,borderColor:getComputedStyle(document.documentElement).getPropertyValue('--surface').trim()||'#13131a',hoverOffset:6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{color:'#9898b8',font:{size:10,family:'DM Sans'},padding:5,boxWidth:8}},tooltip:{callbacks:{label:ctx=>` R$ ${fmt(ctx.raw)} (${(ctx.raw/(vals.reduce((a,b)=>a+b,0)||1)*100).toFixed(1)}%)`}}},cutout:'60%'}});
  const ms=activeMonths();const iD=ms.map(m=>C.sum(C.inc(ST.entries,m))),eD=ms.map(m=>C.sum(C.exp(ST.entries,m)));
  if(charts.bar)charts.bar.destroy();
  charts.bar=new Chart(document.getElementById('barChart').getContext('2d'),{type:'bar',data:{labels:ms.map(m=>m.substring(0,3)),datasets:[{label:'Receitas',data:iD,backgroundColor:'rgba(0,229,180,.55)',borderColor:'#00e5b4',borderWidth:1.5,borderRadius:4},{label:'Gastos',data:eD,backgroundColor:'rgba(124,92,252,.55)',borderColor:'#7c5cfc',borderWidth:1.5,borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{grid:{color:'rgba(255,255,255,.03)'},ticks:{color:'#6b6b8a',font:{size:10}}},y:{grid:{color:'rgba(255,255,255,.03)'},ticks:{color:'#6b6b8a',font:{size:10},callback:v=>'R$'+fmt(v)}}},plugins:{legend:{labels:{color:'#9898b8',font:{size:11},boxWidth:8}},tooltip:{callbacks:{label:ctx=>`R$ ${fmt(ctx.raw)}`}}}}});
  const acc=C.accBal(ST.entries,ms);if(charts.sal)charts.sal.destroy();
  const ctx3=document.getElementById('saldoChart').getContext('2d');const gr=ctx3.createLinearGradient(0,0,0,195);gr.addColorStop(0,'rgba(0,229,180,.3)');gr.addColorStop(1,'rgba(0,229,180,0)');
  charts.sal=new Chart(ctx3,{type:'line',data:{labels:acc.map(d=>d.month.substring(0,3)),datasets:[{label:'Saldo Acumulado',data:acc.map(d=>d.s),borderColor:'#00e5b4',backgroundColor:gr,fill:true,borderWidth:2.5,pointBackgroundColor:'#00e5b4',pointRadius:4,tension:.4}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{grid:{color:'rgba(255,255,255,.03)'},ticks:{color:'#6b6b8a',font:{size:10}}},y:{grid:{color:'rgba(255,255,255,.03)'},ticks:{color:'#6b6b8a',font:{size:10},callback:v=>'R$'+fmt(v)}}},plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>`R$ ${fmt(ctx.raw)}`}}}}});
}

function renderCatList(){const exp=C.exp(ST.entries,ST.month);const byCat=C.byCat(exp);const tot=Object.values(byCat).reduce((s,v)=>s+v,0)||1;const sorted=Object.entries(byCat).sort((a,b)=>b[1]-a[1]);document.getElementById('catList').innerHTML=sorted.length?sorted.map(([cat,val])=>`<div class="cat-item"><div class="cat-dot" style="background:${CC[cat]||'#90a4ae'}"></div><div class="cat-nm">${CE[cat]||''} ${cat}</div><div class="cat-bw"><div class="cat-bf" style="width:${(val/tot*100).toFixed(1)}%;background:${CC[cat]||'#90a4ae'}"></div></div><div class="cat-vl">R$ ${fmt(val)}</div><div class="cat-pct">${(val/tot*100).toFixed(0)}%</div></div>`).join(''):'<div class="empty"><span>📊</span>Sem dados</div>';}

function renderGoals(){const exp=C.exp(ST.entries,ST.month);const byCat=C.byCat(exp);const el=document.getElementById('catGoals');const gc=Object.keys(ST.goals);if(!gc.length){el.innerHTML='<div style="color:var(--text-muted);font-size:12px;padding:6px;">Configure metas</div>';return;}el.innerHTML=gc.map(cat=>{const goal=ST.goals[cat],spent=byCat[cat]||0,pct=goal>0?Math.min(spent/goal*100,100):0;const over=spent>goal,warn=!over&&spent>goal*.85;const st=over?'over':warn?'warn':'ok';const stTxt=over?'🔴 Estourou':warn?'🟡 Quase':'🟢 OK';const col=over?'var(--accent3)':warn?'var(--accent4)':'var(--accent2)';return`<div class="gi"><div class="gi-hdr"><span class="gi-nm">${CE[cat]||''} ${cat}</span><span class="gs ${st}">${stTxt}</span></div><div class="gbw"><div class="gbf" style="width:${pct}%;background:${col}"></div></div><div class="gvals">R$ ${fmt(spent)} / R$ ${fmt(goal)}</div></div>`;}).join('');}

function editGoals(){const cats=['Alimentação','Compras','Carro','Contas','Transporte','Saude','Cartão','Estudos'];const cur=cats.map(c=>`${c}:${(ST.goals[c]||0).toFixed(2)}`).join('\n');const inp=prompt(`Metas (Categoria:Valor, uma por linha):\n\n${cur}`);if(!inp)return;inp.split('\n').forEach(l=>{const[cat,val]=l.split(':');if(cat&&val){const v=parseFloat(val.replace(',','.').trim());if(!isNaN(v))ST.goals[cat.trim()]=v;}});S.json('goals',ST.goals);renderGoals();renderInsights();toast('Metas atualizadas!');}

function renderRecurring(){const el=document.getElementById('recList');if(!ST.recurring.length){el.innerHTML='<div style="color:var(--text-muted);font-size:12px;padding:4px;">Nenhuma recorrente</div>';return;}el.innerHTML=ST.recurring.map(r=>`<div class="rec-item"><span>${CE[r.cat]||'📄'}</span><span class="rec-nm">${r.name}</span><span class="rec-vl">R$ ${fmt(r.val)}/mês</span><button class="rec-btn" onclick="applyRec('${r.id}')">+ Aplicar</button><button class="rec-btn del" onclick="delRec('${r.id}')">✕</button></div>`).join('');}
function addRecurring(){const nm=prompt('Nome (ex: Netflix):');if(!nm)return;const v=parseFloat((prompt('Valor (R$):')||'').replace(',','.'));if(isNaN(v)||v<=0){toast('Valor inválido');return;}const cat=prompt('Categoria:','Contas');ST.recurring.push({id:'r_'+Date.now(),name:nm.trim(),cat:cat||'Contas',val:v});S.json('recurring',ST.recurring);renderRecurring();toast(`"${nm}" adicionada!`);}
function applyRec(id){const r=ST.recurring.find(x=>x.id===id);if(!r)return;const e={id:'rc_'+Date.now(),month:ST.month,date:new Date().toISOString().split('T')[0],type:'saida',category:r.cat,description:r.name+' (Recorrente)',value:r.val,recurring:true};ST.entries.push(e);S.save(ST.entries);render();toast(`✓ "${r.name}" adicionado`);}
function delRec(id){ST.recurring=ST.recurring.filter(r=>r.id!==id);S.json('recurring',ST.recurring);renderRecurring();}

// ===== TABLE =====
function debounceSrch(){clearTimeout(srchTimer);srchTimer=setTimeout(()=>{ST.srch=(document.getElementById('srch').value||'').toLowerCase();ST.page=1;renderTable();},200);}

function filteredData(){const tp=document.getElementById('ftType')?.value||'',cat=document.getElementById('ftCat')?.value||'',ord=document.getElementById('ftOrd')?.value||'date-desc';let d=C.all(ST.entries,ST.month);if(tp)d=d.filter(e=>e.type===tp);if(cat)d=d.filter(e=>e.category===cat);if(ST.srch)d=d.filter(e=>e.description.toLowerCase().includes(ST.srch)||e.category.toLowerCase().includes(ST.srch)||String(e.value).includes(ST.srch));return[...d].sort((a,b)=>ord==='date-desc'?b.date.localeCompare(a.date):ord==='date-asc'?a.date.localeCompare(b.date):ord==='val-desc'?b.value-a.value:a.value-b.value);}

function hl(txt,term){if(!term)return txt;const i=txt.toLowerCase().indexOf(term);if(i<0)return txt;return txt.substring(0,i)+`<mark class="hl">${txt.substring(i,i+term.length)}</mark>`+txt.substring(i+term.length);}

function renderTable(){const fd=filteredData();const tot=fd.length,pgs=Math.max(1,Math.ceil(tot/ST.pp));if(ST.page>pgs)ST.page=pgs;const pd=fd.slice((ST.page-1)*ST.pp,ST.page*ST.pp);const body=document.getElementById('tbody'),em=document.getElementById('empty');
  if(!pd.length){body.innerHTML='';em.style.display='block';}
  else{em.style.display='none';body.innerHTML=pd.map(e=>{const col=CC[e.category]||'#90a4ae',d=new Date(e.date+'T12:00:00'),ds=d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}),isI=e.type==='entrada';const ib=e.inst?`<span class="ibadge">${e.inst.c}/${e.inst.n}x</span>`:'';const rb=e.recurring?`<span class="rbadge">↺</span>`:'';return`<tr class="${isI?'ir':''}"><td class="td">${ds}</td><td><span class="tp ${isI?'i':'e'}">${isI?'↑ Entrada':'↓ Gasto'}</span></td><td><span class="cbg" style="background:${col}18;color:${col}">${CE[e.category]||''} ${e.category}</span></td><td class="tdsc">${hl(e.description,ST.srch)}${ib}${rb}</td><td class="tv ${isI?'i':'e'}">${isI?'+':'−'} R$ ${fmt(e.value)}</td><td><div class="ab"><button class="ed" onclick="openEdit('${e.id}')" title="Editar">✎</button><button class="dl" onclick="delEntry('${e.id}')" title="Remover">✕</button></div></td></tr>`;}).join('');}
  const pag=document.getElementById('pag');if(pgs<=1){pag.innerHTML='';return;}let b=`<span class="pi">${tot} registros</span>`;if(ST.page>1)b+=`<button class="pb" onclick="goPage(${ST.page-1})">‹</button>`;for(let i=Math.max(1,ST.page-2);i<=Math.min(pgs,ST.page+2);i++)b+=`<button class="pb ${i===ST.page?'a':''}" onclick="goPage(${i})">${i}</button>`;if(ST.page<pgs)b+=`<button class="pb" onclick="goPage(${ST.page+1})">›</button>`;pag.innerHTML=b;}

function goPage(p){ST.page=p;renderTable();}

// ===== FORM =====
function openForm(t){ST.formOpen=true;document.getElementById('addForm').classList.add('open');setType(t);setTimeout(()=>document.getElementById('fDesc').focus(),50);document.getElementById('fMonth').value=ST.month;}
function closeForm(){ST.formOpen=false;document.getElementById('addForm').classList.remove('open');}
function setType(t){ST.ftype=t;const isE=t==='saida';document.getElementById('tabE').className='ftab '+(isE?'ae':'');document.getElementById('tabI').className='ftab '+(!isE?'ai':'');document.getElementById('fCG').style.display=isE?'':'none';document.getElementById('fIG').style.display=isE?'none':'';document.getElementById('instRow').style.display=isE?'':'none';const b=document.getElementById('bsub');b.textContent=isE?'✓ Adicionar Gasto':'✓ Adicionar Receita';b.className='bsub '+(isE?'e':'i');}
function toggleInst(){const c=document.getElementById('fInst').checked;document.getElementById('instF').style.display=c?'flex':'none';}
function autoCat(){const d=document.getElementById('fDesc').value.toLowerCase();for(const[k,cat]of Object.entries(AC)){if(d.includes(k)){document.getElementById('fCat').value=cat;break;}}}

function submit(){
  const date=document.getElementById('fDate').value,desc=document.getElementById('fDesc').value.trim();
  const val=parseFloat(document.getElementById('fVal').value),month=document.getElementById('fMonth').value;
  const t=ST.ftype,cat=t==='saida'?document.getElementById('fCat').value:document.getElementById('fICat').value;
  if(!date||date.length<10){toast('⚠️ Informe a data!');return;}
  if(!desc||desc.length<2){toast('⚠️ Descrição muito curta!');return;}
  if(isNaN(val)||val<=0||val>1e6){toast('⚠️ Valor inválido!');return;}
  const isInst=t==='saida'&&document.getElementById('fInst').checked;
  let inst=null;if(isInst){const n=parseInt(document.getElementById('fInstN').value)||2,c=parseInt(document.getElementById('fInstC').value)||1;inst={n,c};}
  const e={id:'u_'+Date.now(),month,date,type:t,category:cat,description:desc,value:val};
  if(inst)e.inst=inst;
  ST.entries.push(e);S.save(ST.entries);
  document.getElementById('fDesc').value='';document.getElementById('fVal').value='';document.getElementById('fDate').value=new Date().toISOString().split('T')[0];
  ST.month=month;ST.page=1;render();toast(`✓ ${t==='entrada'?'Receita':'Gasto'} adicionado: R$ ${fmt(val)}`);
}

// ===== EDIT =====
function openEdit(id){const e=ST.entries.find(x=>x.id===id);if(!e)return;ST.editId=id;document.getElementById('eDate').value=e.date;document.getElementById('eCat').value=e.category;document.getElementById('eDesc').value=e.description;document.getElementById('eVal').value=e.value;document.getElementById('editMo').classList.add('open');}
function saveEdit(){const e=ST.entries.find(x=>x.id===ST.editId);if(!e)return;const v=parseFloat(document.getElementById('eVal').value);if(!v||v<=0){toast('Valor inválido');return;}e.date=document.getElementById('eDate').value;e.category=document.getElementById('eCat').value.trim();e.description=document.getElementById('eDesc').value.trim();e.value=v;S.save(ST.entries);closeMo();render();toast('✓ Editado!');}
function closeMo(){document.getElementById('editMo').classList.remove('open');ST.editId=null;}
function delEntry(id){if(!confirm('Remover este lançamento?'))return;ST.entries=ST.entries.filter(e=>e.id!==id);S.save(ST.entries);render();toast('Removido');}

// ===== EXPORT =====
function exportCSV(){const d=C.all(ST.entries,ST.month);const rows='Data,Tipo,Categoria,Descrição,Valor\n'+d.map(e=>`${e.date},${e.type==='entrada'?'Receita':'Gasto'},${e.category},"${e.description}",${e.value.toFixed(2)}`).join('\n');const b=new Blob(['\uFEFF'+rows],{type:'text/csv;charset=utf-8;'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=`financas_${ST.month}_2026.csv`;a.click();URL.revokeObjectURL(u);toast(`📤 CSV exportado!`);}

// ===== THEME =====
function toggleTheme(){const l=document.documentElement.getAttribute('data-theme')==='light';document.documentElement.setAttribute('data-theme',l?'':'light');document.getElementById('themeBtn').textContent=l?'🌙':'☀️';S.pref('theme',l?'dark':'light');}

// ===== TOAST =====
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800);}

// ===== KEYBOARD =====
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMo();closeForm();}});
document.getElementById('editMo').addEventListener('click',e=>{if(e.target===e.currentTarget)closeMo();});

init();