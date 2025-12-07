// students/TEMPLATE.js
// คัดลอกไฟล์นี้แล้วเปลี่ยนชื่อเป็น รหัสนิสิตของคุณ.js

const studentProfile = {
  // ข้อมูลพื้นฐาน
  studentId: "66025841",  // เปลี่ยนเป็นรหัสนิสิตของคุณ
  name: "ชื่อ-นามสกุล",   // เปลี่ยนเป็นชื่อจริงของคุณ
  nickname: "Beam",    // ชื่อเล่นของคุณ
  year: 3,                 // ชั้นปี
  major: "Computer Engineering",
  
  // ข้อมูลติดต่อ (ถ้าต้องการ)
  contact: {
    email: "student@example.com",
    github: "github_username"
  },
  
  // ทักษะที่มี
  skills: [
    "JavaScript",
    "Python",
    "Git",
    // เพิ่มทักษะอื่นๆ ที่คุณมี
  ],
  
  // ความสนใจ
  interests: [
    "Web Development",
    "AI/ML",
    // เพิ่มความสนใจอื่นๆ
  ],
  
  // ฟังก์ชันแนะนำตัว
  introduce() {
    return `สวัสดีครับ/ค่ะ ผม/ดิฉัน ${this.name} (${this.nickname}) 
รหัส ${this.studentId} 
เรียนสาขา ${this.major} ชั้นปีที่ ${this.year}
ทักษะ: ${this.skills.join(", ")}
สนใจเรื่อง: ${this.interests.join(", ")}`;
  },
  
  // ฟังก์ชันคำนวณเกรดเฉลี่ย
  calculateGPA(grades) {
    if (grades.length === 0) return 0;
    const sum = grades.reduce((a, b) => a + b, 0);
    return parseFloat((sum / grades.length).toFixed(2));
  },
  
  // ฟังก์ชันแปลงเกรดเป็นตัวอักษร
  getLetterGrade(score) {
    if (score >= 80) return 'A';
    if (score >= 75) return 'B+';
    if (score >= 70) return 'B';
    if (score >= 65) return 'C+';
    if (score >= 60) return 'C';
    if (score >= 55) return 'D+';
    if (score >= 50) return 'D';
    return 'F';
  },
  
  // ฟังก์ชันคำนวณอายุ
  calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  },
  
  // ฟังก์ชันสร้าง todo list
  createTodoList(tasks) {
    return tasks.map((task, index) => `${index + 1}. ${task}`).join('\n');
  }
};

// Export module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = studentProfile;
}

// ทดสอบฟังก์ชันต่างๆ
if (require.main === module) {
  console.log('=== Student Profile ===');
  console.log(studentProfile.introduce());
  console.log('\n=== Test Functions ===');
  console.log('GPA:', studentProfile.calculateGPA([3.5, 3.8, 4.0, 3.2]));
  console.log('Letter Grade (85):', studentProfile.getLetterGrade(85));
  console.log('Age (born 2003):', studentProfile.calculateAge(2003));
  console.log('\n=== Todo List ===');
  console.log(studentProfile.createTodoList([
    'เรียน Git Flow',
    'ทำ workshop',
    'ส่งงาน'
  ]));
}
