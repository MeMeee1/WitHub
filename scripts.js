function showForm(role) {
    const formSection = document.getElementById('form-section');
    const formTitle = document.getElementById('form-title');
    const extraField = document.getElementById('extra-field');
    const extraInput = document.getElementById('extra-input');

    formSection.classList.remove('hidden');

    if (role === 'student') {
        formTitle.textContent = 'Student Registration';
        extraField.classList.add('hidden');
        extraInput.classList.add('hidden');
    } else if (role === 'teacher') {
        formTitle.textContent = 'Teacher Registration';
        extraField.textContent = 'Subject Specialty:';
        extraField.classList.remove('hidden');
        extraInput.classList.remove('hidden');
        extraInput.setAttribute('placeholder', 'Enter your subject');
    }
}

function redirectAfterRegister(event) {
    event.preventDefault();
    const formTitle = document.getElementById('form-title').textContent;

    if (formTitle === 'Student Registration') {
        document.getElementById('student-dashboard').classList.remove('hidden');
    } else if (formTitle === 'Teacher Registration') {
        document.getElementById('teacher-dashboard').classList.remove('hidden');
    }

    document.getElementById('register').classList.add('hidden');
    document.getElementById('form-section').classList.add('hidden');
}

function bookCourse(courseName) {
    const bookedCourses = document.getElementById('booked-courses');
    const listItem = document.createElement('li');
    listItem.textContent = `${courseName} - Booked at ${new Date().toLocaleTimeString()}`;
    bookedCourses.appendChild(listItem);
}
