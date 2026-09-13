import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Bilesh',
      age: 22,
    },
    {
      id: 2,
      name: 'Beless',
      age: 21,
    },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentsById(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException('Student Not Found');
    return student;
  }

  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');

    this.students[index] = { id, ...data };
    return this.students[index];
  }

  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentsById(id);
    Object.assign(student, data);
    return student;
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student Not Found!');

    const deleted = this.students.splice(index, 1);
    return { message: ' Student Data Deleted.', student: deleted[0] };
  }
}
