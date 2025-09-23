function showSection(sectionId) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

let users = [];
let attendance = [];

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    college: document.getElementById('college').value,
    role: document.getElementById('role').value,
    duration: document.getElementById('duration').value
  };
  users.push(user);
  document.getElementById('regMessage').innerText = 'User registered successfully!';
  document.getElementById('registerForm').reset();
  updateDashboard();
});

function markAttendance(type) {
  const now = new Date();
  attendance.push({ type, time: now.toLocaleString() });
  document.getElementById('attendanceMessage').innerText = `${type} recorded at ${now.toLocaleTimeString()}`;
  updateDashboard();
}

function updateDashboard() {
  document.getElementById('totalInterns').innerText = users.length;
  document.getElementById('todayAttendance').innerText = attendance.filter(a => {
    const today = new Date().toDateString();
    return new Date(a.time).toDateString() === today;
  }).length;
}