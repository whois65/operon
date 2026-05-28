
/* ══ DATA ══ */
const CUSTOMERS = [
    { name: 'Acme Corporation', email: 'billing@acme.com', seg: 'Enterprise', status: 'Active', rev: '$62,000', last: '2 days ago', av: 'AC', avc: 'av-blue' },
    { name: 'GreenGrow Ltd', email: 'hello@greengrow.io', seg: 'SMB', status: 'Active', rev: '$48,000', last: '1 week ago', av: 'GG', avc: 'av-green' },
    { name: 'TechStart Inc.', email: 'ops@techstart.co', seg: 'Startup', status: 'Active', rev: '$38,000', last: 'Today', av: 'TS', avc: 'av-amber' },
    { name: 'NovaTech Ventures', email: 'contact@novatech.com', seg: 'Enterprise', status: 'Active', rev: '$28,000', last: '3 days ago', av: 'NV', avc: 'av-rose' },
    { name: 'BlueRidge Partners', email: 'info@blueridge.net', seg: 'SMB', status: 'Lead', rev: '$20,000', last: '5 days ago', av: 'BR', avc: 'av-violet' },
    { name: 'Skyline Digital', email: 'hello@skyline.io', seg: 'Startup', status: 'Lead', rev: '—', last: 'Yesterday', av: 'SD', avc: 'av-cyan' },
    { name: 'PrimePath Corp', email: 'admin@primepath.com', seg: 'Enterprise', status: 'Inactive', rev: '$15,000', last: '1 month ago', av: 'PP', avc: 'av-gray' },
    { name: 'Orbit Solutions', email: 'ops@orbitsol.com', seg: 'SMB', status: 'Active', rev: '$11,200', last: '4 days ago', av: 'OS', avc: 'av-blue' },];
const PRODUCTS = [
    { name: 'Wireless Keyboard Pro', sku: 'WKB-001', cat: 'Electronics', price: '$89.99', stock: 142, status: 'In Stock' },
    { name: 'Business Suite License', sku: 'BSL-2024', cat: 'Software', price: '$299/yr', stock: 999, status: 'In Stock' },
    { name: 'USB-C Hub 7-Port', sku: 'UCH-007', cat: 'Accessories', price: '$49.99', stock: 8, status: 'Low Stock' },
    { name: 'Developer Workstation', sku: 'DWS-2024', cat: 'Hardware', price: '$2,499', stock: 22, status: 'In Stock' },
    { name: 'Noise-Cancel Headset', sku: 'NCH-300', cat: 'Electronics', price: '$179.99', stock: 6, status: 'Low Stock' },
    { name: 'Cloud Storage 1TB', sku: 'CS-1TB', cat: 'Software', price: '$99/yr', stock: 999, status: 'In Stock' },
    { name: 'Ergonomic Mouse', sku: 'EMS-100', cat: 'Accessories', price: '$64.99', stock: 0, status: 'Out of Stock' },
    { name: '4K Webcam', sku: 'WC-4K', cat: 'Electronics', price: '$149.99', stock: 35, status: 'In Stock' },];
const INVOICES = [
    { id: 'INV-2841', customer: 'Acme Corp', amount: '$12,400', date: 'Dec 10', due: 'Dec 24', status: 'Paid' },
    { id: 'INV-2840', customer: 'GreenGrow Ltd', amount: '$8,200', date: 'Dec 8', due: 'Dec 22', status: 'Pending' },
    { id: 'INV-2839', customer: 'TechStart Inc.', amount: '$5,600', date: 'Dec 5', due: 'Dec 19', status: 'Overdue' },
    { id: 'INV-2838', customer: 'NovaTech Ventures', amount: '$18,900', date: 'Dec 3', due: 'Dec 17', status: 'Paid' },
    { id: 'INV-2837', customer: 'BlueRidge Partners', amount: '$3,200', date: 'Nov 28', due: 'Dec 12', status: 'Overdue' },
    { id: 'INV-2836', customer: 'Skyline Digital', amount: '$7,500', date: 'Nov 25', due: 'Dec 9', status: 'Pending' },
    { id: 'INV-2835', customer: 'Orbit Solutions', amount: '$4,800', date: 'Nov 20', due: 'Dec 4', status: 'Paid' },];
const PROJECTS = [
    { name: 'Website Redesign', client: 'Acme Corp', team: 'Design', budget: '$12,400', progress: 68, due: 'Dec 28', status: 'In Progress' },
    { name: 'Data Migration', client: 'NovaTech', team: 'Engineering', budget: '$9,800', progress: 45, due: 'Jan 5', status: 'In Progress' },
    { name: 'Analytics Dashboard', client: 'TechStart', team: 'Engineering', budget: '$22,000', progress: 90, due: 'Dec 20', status: 'In Review' },
    { name: 'SEO Audit & Fix', client: 'BlueRidge', team: 'Marketing', budget: '$5,200', progress: 30, due: 'Jan 12', status: 'In Progress' },
    { name: 'API Development', client: 'Acme Corp', team: 'Engineering', budget: '$16,500', progress: 82, due: 'Dec 22', status: 'In Review' },
    { name: 'Brand Identity', client: 'NovaTech', team: 'Design', budget: '$8,000', progress: 100, due: 'Dec 1', status: 'Done' },
    { name: 'Mobile App MVP', client: 'GreenGrow', team: 'Engineering', budget: '$45,000', progress: 15, due: 'Mar 15', status: 'Backlog' },
    { name: 'Email Campaigns', client: 'GreenGrow', team: 'Marketing', budget: '$3,600', progress: 100, due: 'Nov 30', status: 'Done' },];
const EMPLOYEES = [
    { name: 'Jordan Lee', dept: 'Engineering', role: 'Lead Developer', type: 'Full-time', start: 'Jan 2021', status: 'Active', av: 'JL', avc: 'av-blue' },
    { name: 'Maria Santos', dept: 'Sales', role: 'Account Executive', type: 'Full-time', start: 'Mar 2022', status: 'Active', av: 'MS', avc: 'av-green' },
    { name: 'Chris Park', dept: 'Design', role: 'UX Designer', type: 'Full-time', start: 'Aug 2022', status: 'Active', av: 'CP', avc: 'av-violet' },
    { name: 'Aisha Williams', dept: 'Marketing', role: 'Content Strategist', type: 'Full-time', start: 'May 2023', status: 'Active', av: 'AW', avc: 'av-amber' },
    { name: 'Devon Clark', dept: 'Engineering', role: 'Backend Engineer', type: 'Full-time', start: 'Sep 2022', status: 'Active', av: 'DC', avc: 'av-blue' },
    { name: 'Sam Rivera', dept: 'Operations', role: 'Ops Coordinator', type: 'Part-time', start: 'Feb 2024', status: 'Active', av: 'SR', avc: 'av-cyan' },
    { name: 'Priya Nair', dept: 'Finance', role: 'Financial Analyst', type: 'Full-time', start: 'Oct 2021', status: 'Active', av: 'PN', avc: 'av-rose' },
    { name: 'Tyler Morgan', dept: 'HR & Admin', role: 'HR Generalist', type: 'Full-time', start: 'Jun 2023', status: 'On Leave', av: 'TM', avc: 'av-gray' },];

const COLLABS = [
    { name: 'CloudBase Ltd', type: 'Infrastructure', icon: '☁️', bg: 'rgba(77,142,240,0.1)', value: '$22,000/yr', contact: 'James Wu', since: 'Jan 2024', status: 'Active', statusc: 'badge-green' },
    { name: 'Apex Distribution', type: 'Sales Channel', icon: '📦', bg: 'rgba(0,212,170,0.1)', value: '$18,500/yr', contact: 'Lisa Chen', since: 'Mar 2024', status: 'Active', statusc: 'badge-green' },
    { name: 'TalentBridge', type: 'HR Outsource', icon: '👥', bg: 'rgba(157,110,240,0.1)', value: '$12,000/yr', contact: 'Sarah Kim', since: 'Feb 2023', status: 'Renewal', statusc: 'badge-amber' },
    { name: 'ProcureNet', type: 'Supply Chain', icon: '🔗', bg: 'rgba(240,168,48,0.1)', value: '$9,600/yr', contact: 'Ahmed Hassan', since: 'Apr 2022', status: 'Renewal', statusc: 'badge-amber' },
    { name: 'MediaPulse', type: 'Marketing Co-op', icon: '📣', bg: 'rgba(240,80,96,0.1)', value: 'TBD', contact: 'Rachel Torres', since: 'Negotiating', status: 'Negotiating', statusc: 'badge-blue' },
    { name: 'LogiTrack Ltd', type: 'Logistics', icon: '🚚', bg: 'rgba(32,200,232,0.1)', value: 'TBD', contact: 'Ben Foster', since: 'Negotiating', status: 'Negotiating', statusc: 'badge-blue' },];

/* ══ NAV ══ */
function nav(page, el) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    if (el) el.classList.add('active');
    document.getElementById('page-' + page).classList.add('active');
    document.getElementById('topbar-title').textContent = { dashboard: 'Dashboard', customers: 'Customers', inventory: 'Inventory', invoices: 'Invoices & Finance', projects: 'Projects & Tasks', employees: 'Employees & HR', collabs: 'Cooperations & Collaborations' }[page];
    if (document.getElementById('sidebar').classList.contains('open')) document.getElementById('sidebar').classList.remove('open');
}

/* ══ RENDER TABLES ══ */
function renderCustomers() {
    const tb = document.getElementById('customers-tbody');
    tb.innerHTML = CUSTOMERS.map(c => `<tr> <td><div style="display:flex;align-items:center;gap:8px"><div class="avatar avatar-sm ${c.avc}">${c.av}</div><div><div style="font-weight:600">${c.name}</div></div></div></td> <td class="td-muted">${c.email}</td> <td><span class="badge badge-gray">${c.seg}</span></td> <td><span class="badge ${c.status === 'Active' ? 'badge-green' : c.status === 'Lead' ? 'badge-blue' : 'badge-gray'}">${c.status}</span></td> <td class="td-mono">${c.rev}</td> <td class="td-muted">${c.last}</td> <td><div style="display:flex;gap:4px"><button class="btn btn-ghost" style="padding:4px 10px;font-size:11px" onclick="toast('Opening ${c.name}…')">View</button><button class="btn btn-ghost" style="padding:4px 10px;font-size:11px" onclick="toast('Editing ${c.name}…')">Edit</button></div></td> </tr>`).join('');
}

function renderInventory() {
    const tb = document.getElementById('inventory-tbody');
    tb.innerHTML = PRODUCTS.map(p => `<tr> <td><div style="font-weight:600">${p.name}</div></td> <td class="td-mono" style="color:var(--tx3)">${p.sku}</td> <td><span class="badge badge-gray">${p.cat}</span></td> <td class="td-mono">${p.price}</td> <td><div style="display:flex;align-items:center;gap:8px"><span class="td-mono">${p.stock}</span>${p.stock < 10 && p.stock > 0 ? '<span class="badge badge-amber" style="font-size:10px">Low</span>' : p.stock === 0 ? '<span class="badge badge-red" style="font-size:10px">Out</span>' : ''}</div></td> <td><span class="badge ${p.status === 'In Stock' ? 'badge-green' : p.status === 'Low Stock' ? 'badge-amber' : 'badge-red'}">${p.status}</span></td> <td><div style="display:flex;gap:4px"><button class="btn btn-ghost" style="padding:4px 10px;font-size:11px" onclick="toast('Editing ${p.name}…')">Edit</button><button class="btn btn-ghost" style="padding:4px 10px;font-size:11px" onclick="toast('Reordering ${p.name}…')">Reorder</button></div></td> </tr>`).join('');
}

function renderInvoices() {
    const tb = document.getElementById('invoices-tbody');
    tb.innerHTML = INVOICES.map(i => `<tr> <td class="td-mono" style="color:var(--acc)">${i.id}</td> <td style="font-weight:600">${i.customer}</td> <td class="td-mono">${i.amount}</td> <td class="td-muted">${i.date}</td> <td class="td-muted">${i.due}</td> <td><span class="badge ${i.status === 'Paid' ? 'badge-green' : i.status === 'Pending' ? 'badge-amber' : 'badge-red'}">${i.status}</span></td> <td><button class="btn btn-ghost" style="padding:4px 10px;font-size:11px" onclick="toast('${i.status === 'Paid' ? 'Invoice already paid' : 'Sending reminder for ' + i.id}','${i.status === 'Overdue' ? 'error' : 'success'}')">${i.status === 'Paid' ? 'Receipt' : 'Send Reminder'}</button></td> </tr>`).join('');
}

function renderProjects() {
    const tb = document.getElementById('projects-tbody');
    tb.innerHTML = PROJECTS.map(p => `<tr> <td><div style="font-weight:600">${p.name}</div></td> <td class="td-muted">${p.client}</td> <td><span class="badge badge-gray">${p.team}</span></td> <td class="td-mono">${p.budget}</td> <td><div style="min-width:80px"><div style="display:flex;justify-content:space-between;font-size:11px;color:var(--tx3);margin-bottom:3px"><span>${p.progress}%</span></div><div class="prog-bar" style="height:5px"><div class="prog-fill" style="width:${p.progress}%;background:${p.progress === 100 ? 'var(--acc)' : p.progress > 60 ? 'var(--blue)' : 'var(--amber)'}"></div></div></div></td> <td class="td-muted">${p.due}</td> <td><span class="badge ${p.status === 'Done' ? 'badge-green' : p.status === 'In Progress' ? 'badge-blue' : p.status === 'In Review' ? 'badge-amber' : p.status === 'Overdue' ? 'badge-red' : 'badge-gray'}">${p.status}</span></td> </tr>`).join('');
}

function renderEmployees() {
    const tb = document.getElementById('employees-tbody');
    tb.innerHTML = EMPLOYEES.map(e => `<tr> <td><div style="display:flex;align-items:center;gap:8px"><div class="avatar avatar-sm ${e.avc}">${e.av}</div><div style="font-weight:600">${e.name}</div></div></td> <td><span class="badge badge-gray">${e.dept}</span></td> <td class="td-muted">${e.role}</td> <td><span class="badge ${e.type === 'Full-time' ? 'badge-blue' : e.type === 'Part-time' ? 'badge-amber' : 'badge-violet'}">${e.type}</span></td> <td class="td-muted">${e.start}</td> <td><span class="badge ${e.status === 'Active' ? 'badge-green' : 'badge-amber'}">${e.status}</span></td> </tr>`).join('');
}

function renderCollabs() {
    const grid = document.getElementById('collabs-grid');
    grid.innerHTML = COLLABS.map(c => `<div class="collab-card"> <div class="collab-head"> <div class="collab-logo" style="background:${c.bg}">${c.icon}</div> <div><div class="collab-name">${c.name}</div><div class="collab-type">${c.type}</div></div> <span class="badge ${c.statusc}" style="margin-left:auto">${c.status}</span> </div> <div class="collab-meta"> <div class="collab-meta-row"><span class="collab-meta-label">Contact</span><span class="collab-meta-value">${c.contact}</span></div> <div class="collab-meta-row"><span class="collab-meta-label">Since</span><span class="collab-meta-value">${c.since}</span></div> <div class="collab-meta-row"><span class="collab-meta-label">Value</span><span class="collab-meta-value" style="font-family:var(--fm);color:var(--acc)">${c.value}</span></div> </div> <div class="collab-actions"> <button class="btn btn-ghost" style="flex:1;padding:6px;font-size:12px;justify-content:center" onclick="toast('Opening ${c.name} profile…')">View</button> <button class="btn btn-ghost" style="flex:1;padding:6px;font-size:12px;justify-content:center" onclick="toast('Messaging ${c.contact}…')">Contact</button> </div> </div>`).join('');
} /* ══ ADD ACTIONS ══ */ function addCustomer() {
    CUSTOMERS.unshift({ name: 'New Customer', email: 'new@company.com', seg: 'Lead', status: 'Lead', rev: '—', last: 'Just now', av: 'NC', avc: 'av-gray' });
    renderCustomers();
    closeModal('cust-modal');
    toast('Customer added!', 'success');
}

function addProduct() {
    PRODUCTS.unshift({ name: 'New Product', sku: 'NEW-001', cat: 'Electronics', price: '$0.00', stock: 0, status: 'Out of Stock' });
    renderInventory();
    closeModal('prod-modal');
    toast('Product added!', 'success');
}

function addInvoice() {
    INVOICES.unshift({ id: 'INV-2842', customer: 'New Customer', amount: '$0', date: 'Today', due: 'Net 14', status: 'Pending' });
    renderInvoices();
    closeModal('inv-modal');
    toast('Invoice created!', 'success');
}

function addProject() {
    PROJECTS.unshift({ name: 'New Project', client: 'TBD', team: 'TBD', budget: '$0', progress: 0, due: 'TBD', status: 'Backlog' });
    renderProjects();
    closeModal('proj-modal');
    toast('Project created!', 'success');
}

function addEmployee() {
    EMPLOYEES.unshift({ name: 'New Employee', dept: 'TBD', role: 'TBD', type: 'Full-time', start: 'Today', status: 'Active', av: 'NE', avc: 'av-gray' });
    renderEmployees();
    closeModal('emp-modal');
    toast('Employee added!', 'success');
}

function addCollab() {
    COLLABS.unshift({ name: 'New Partner', type: 'Other', icon: '🤝', bg: 'rgba(255,255,255,0.05)', value: 'TBD', contact: 'TBD', since: 'Today', status: 'Prospect', statusc: 'badge-gray' });
    renderCollabs();
    closeModal('collab-modal');
    toast('Partnership added!', 'success');
} /* ══ MODALS ══ */ function openModal(id) {
    document.getElementById(id).classList.add('open');

}

function closeModal(id) {
    document.getElementById(id).classList.remove('open');

}

function closeModals(e) {
    if (e.target.classList.contains('modal-bg')) e.target.classList.remove('open');

}
/* ══ TOAST ══ */ function toast(msg, type = '') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast show ' + (type || '');
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove('show'), 2400);

}

/* ══ CHARTS ══ */
function initCharts() {
    const cfg = { color: 'rgba(255,255,255,0.05)', fontColor: '#8892a4' };
    const rc = document.getElementById('revenueChart').getContext('2d');
    new Chart(rc, {
        type: 'line', data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [
                { label: 'Revenue', data: [18400, 22100, 19800, 26500, 24200, 31800, 28400, 34100, 29600, 38200, 35400, 42800], borderColor: '#00d4aa', backgroundColor: 'rgba(0,212,170,0.06)', fill: true, tension: 0.4, pointRadius: 3, pointBackgroundColor: '#00d4aa', borderWidth: 2 }, { label: 'Expenses', data: [12200, 14800, 13400, 17600, 16100, 21200, 18900, 22700, 19700, 25400, 23600, 28500], borderColor: '#4d8ef0', backgroundColor: 'rgba(77,142,240,0.04)', fill: true, tension: 0.4, pointRadius: 3, pointBackgroundColor: '#4d8ef0', borderWidth: 2 }]
        }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: true, labels: { color: cfg.fontColor, font: { size: 11 }, boxWidth: 10, padding: 14 } }, tooltip: { backgroundColor: '#1c2333', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, titleColor: '#e8eaf2', bodyColor: '#8892a4' } }, scales: { x: { grid: { color: cfg.color }, ticks: { color: cfg.fontColor, font: { size: 10 } } }, y: { grid: { color: cfg.color }, ticks: { color: cfg.fontColor, font: { size: 10 }, callback: v => '$' + v.toLocaleString() } } } }
    });
    // Donut const 
    dc = document.getElementById('donutChart').getContext('2d');
    new Chart(dc, {
        type: 'doughnut', data: {
            labels: ['Products', 'Services', 'Licensing', 'Other'], datasets: [
                { data: [48, 31, 14, 7], backgroundColor: ['#00d4aa', '#4d8ef0', '#f0a030', '#9d6ef0'], borderWidth: 0, hoverOffset: 4 }]
        }, options: { responsive: true, maintainAspectRatio: false, cutout: '72%', plugins: { legend: { display: false }, tooltip: { backgroundColor: '#1c2333', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, titleColor: '#e8eaf2', bodyColor: '#8892a4' } } }
    });
}

/* ══ INIT ══ */
renderCustomers();
renderInventory();
renderInvoices();
renderProjects();
renderEmployees();
renderCollabs();
window.addEventListener('load', initCharts);

