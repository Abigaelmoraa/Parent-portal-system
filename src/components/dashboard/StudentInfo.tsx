import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, GraduationCap, Mail, Phone, MapPin, Heart, FileText } from "lucide-react";

export const StudentInfo = () => {
  const studentData = {
    name: "Abigael Moraa",
    studentId: "SMOMMO2211",
    dateOfBirth: "March 15, 2003",
    nationality: "Kenyan",
    idNumber: "12345678",
    gender: "Female",
    bloodType: "B+",
    program: "Bachelor of Sciece in Software Engineering",
    year: "4th Year",
    semester: "Semester 2",
    advisor: "Dr. Roseline Nyamwamu",
    enrollmentDate: "September 2021",
    expectedGraduation: "August 2025",
    email: "smommo2211.ueab.ac.ke",
    personalEmail: "abigael.moraa@gmail.com",
    phone: "+254 712 345 678",
    address: "p.o. box 69, Sotik.",
    emergencyContact: "Duke momanyi (Father) - +254 711 234 567",
    emergencyContact2: "Anifah Machuma (Mother) - +254 722 345 678",
    guardianEmail: "anifahmachuma@email.com",
    gpa: "3.7",
    creditsCompleted: "143",
    totalCredits: "167",
    hostel: "off campus",
    medicalConditions: "None",
    allergies: "Proteins"
  };

  const currentCourses = [
    {
      code: "COSC 201",
      name: "Data Structures and Algorithms",
      instructor: "Mr. Omari dickson",
      credits: 3,
      schedule: "Mon, Wed, Fri 10:00-11:00 AM",
      room: "Lab 201",
      grade: "A-"
    },
    {
      code: "INSY 202",
      name: "Database Systems",
      instructor: "Mr. Mobisa Fred",
      credits: 3,
      schedule: "Tue, Thu 2:00-3:30 PM",
      room: "Room 305",
      grade: "B+"
    },
    {
      code: "MATH203",
      name: "Discrete Mathematics",
      instructor: "Madam Chebos",
      credits: 3,
      schedule: "Mon, Wed 11:00-12:30 PM",
      room: "Room 102",
      grade: "A"
    },
    {
      code: "COSC 204",
      name: "Software Engineering definition",
      instructor: "Mr. Mwatati Jerferson",
      credits: 4,
      schedule: "Tue, Thu 9:00-11:00 AM",
      room: "Lab 150",
      grade: "B+"
    },
    {
      code: "ENG205",
      name: "Writing skills",
      instructor: "Mr.Baongoli Mungengo",
      credits: 2,
      schedule: "Fri 2:00-4:00 PM",
      room: "Room 210",
      grade: "A"
    },
    {
      code: "COSC 206",
      name: "Computer Networks",
      instructor: "Dr. Roseline Nyamwamu",
      credits: 3,
      schedule: "Wed, Fri 3:00-4:30 PM",
      room: "Lab 301",
      grade: "B"
    }
  ];

  const academicHistory = [
    {
      semester: "Semester 1 - 2021",
      gpa: "3.5",
      credits: "18",
      status: "Completed",
      courses: 6
    },
    {
      semester: "Semester 2 - 2022",
      gpa: "3.7",
      credits: "18",
      status: "Completed",
      courses: 6
    },
    {
      semester: "Semester 1- 2022",
      gpa: "3.6",
      credits: "18",
      status: "Completed",
      courses: 7
    },
    { semester: "Semester 2 - 2023",
      gpa: "3.3",
      credits: "18",
      status: "Completed",
      courses: 7
    },
    {
      semester: "Semester 1 - 2023",
      gpa: "3.2",
      credits: "18",
      status: "Completed",
      courses: 7
    },
    {
      semester: "Semester 2 - 2024",
      gpa: "3.1",
      credits: "18",
      status: "Completed",
      courses: 7
    },
    {
      semester: "Semester 1 - 2024",
      gpa: "3.33",
      credits: "21",
      status: "Completed",
      courses: 7
    },
    {
      semester: "Semester 2 - 2025",
      gpa: "-",
      credits: "18",
      status: "In progress",
      courses: 6
    }

  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Student Information
          </CardTitle>
          <CardDescription>Comprehensive student profile and academic details</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Personal Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Full Name</label>
                      <p className="text-lg font-semibold">{studentData.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Student ID</label>
                      <p className="font-mono text-sm">{studentData.studentId}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                      <p className="text-sm">{studentData.dateOfBirth}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Gender</label>
                      <p className="text-sm">{studentData.gender}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Nationality</label>
                      <p className="text-sm">{studentData.nationality}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">ID Number</label>
                      <p className="text-sm">{studentData.idNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">University Email</label>
                      <p className="text-sm">{studentData.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Personal Email</label>
                      <p className="text-sm">{studentData.personalEmail}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        Phone
                      </label>
                      <p className="text-sm">{studentData.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Address
                      </label>
                      <p className="text-sm">{studentData.address}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Emergency Contact 1</label>
                      <p className="text-sm">{studentData.emergencyContact}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Emergency Contact 2</label>
                      <p className="text-sm">{studentData.emergencyContact2}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Guardian Email</label>
                      <p className="text-sm">{studentData.guardianEmail}</p>
                    </div>
                  </div>
                </div>

                {/* Academic & Health Information */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Academic Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Program</label>
                        <p className="text-sm">{studentData.program}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Current Year</label>
                        <p className="text-sm">{studentData.year}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Current Semester</label>
                        <p className="text-sm">{studentData.semester}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Academic Advisor</label>
                        <p className="text-sm">{studentData.advisor}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Enrollment Date</label>
                        <p className="text-sm">{studentData.enrollmentDate}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Expected Graduation</label>
                        <p className="text-sm">{studentData.expectedGraduation}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Current GPA</label>
                        <p className="text-lg font-semibold text-green-600">{studentData.gpa}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Credits Progress</label>
                        <p className="text-sm">{studentData.creditsCompleted} / {studentData.totalCredits} completed</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Health & Campus Info
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Blood Type</label>
                        <p className="text-sm">{studentData.bloodType}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Medical Conditions</label>
                        <p className="text-sm">{studentData.medicalConditions}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Allergies</label>
                        <p className="text-sm">{studentData.allergies}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Hostel Assignment</label>
                        <p className="text-sm">{studentData.hostel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Current Semester Courses
                </h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Course Code</TableHead>
                        <TableHead>Course Name</TableHead>
                        <TableHead>Instructor</TableHead>
                        <TableHead>Credits</TableHead>
                        <TableHead>Schedule</TableHead>
                        <TableHead>Room</TableHead>
                        <TableHead>Current Grade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentCourses.map((course) => (
                        <TableRow key={course.code}>
                          <TableCell className="font-medium">{course.code}</TableCell>
                          <TableCell>{course.name}</TableCell>
                          <TableCell>{course.instructor}</TableCell>
                          <TableCell>{course.credits}</TableCell>
                          <TableCell className="text-sm">{course.schedule}</TableCell>
                          <TableCell>{course.room}</TableCell>
                          <TableCell>
                            <Badge variant={course.grade.startsWith('A') ? 'default' : course.grade.startsWith('B') ? 'secondary' : 'outline'}>
                              {course.grade}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Total Credits This Semester:</strong> {currentCourses.reduce((sum, course) => sum + course.credits, 0)} credits
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="academic" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Academic History
                </h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Semester</TableHead>
                        <TableHead>GPA</TableHead>
                        <TableHead>Credits</TableHead>
                        <TableHead>Courses</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {academicHistory.map((record, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{record.semester}</TableCell>
                          <TableCell>{record.gpa}</TableCell>
                          <TableCell>{record.credits}</TableCell>
                          <TableCell>{record.courses}</TableCell>
                          <TableCell>
                            <Badge variant={
                              record.status === 'Completed' ? 'default' :
                              record.status === 'In Progress' ? 'secondary' : 'outline'
                            }>
                              {record.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Cumulative GPA</h4>
                    <p className="text-2xl font-bold text-green-600">{studentData.gpa}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Total Credits</h4>
                    <p className="text-2xl font-bold text-blue-600">{studentData.creditsCompleted}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Progress</h4>
                    <p className="text-2xl font-bold text-purple-600">{Math.round((parseInt(studentData.creditsCompleted) / parseInt(studentData.totalCredits)) * 100)}%</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
