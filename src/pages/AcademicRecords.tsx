
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from '../components/layout/AppSidebar';
import { Header } from '../components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Award, Download } from 'lucide-react';

const AcademicRecords = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('user');
    
    if (!isAuthenticated || !userData) {
      navigate('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleDownloadTranscript = () => {
    // Create transcript content
    const transcriptContent = `
UNIVERSITY OF EASTERN AFRICA, BARATON
OFFICIAL TRANSCRIPT

Student Name: ${user?.name || 'John Doe'}
Student ID: 2021/BSC/CS/001
Program: Bachelor of Science in Computer Science
Academic Year: 2021-2024

ACADEMIC RECORD:

SPRING 2024:
- Advanced Mathematics (MATH 301): A (3 credits)
- Computer Science Fundamentals (CS 201): B+ (4 credits)
- English Literature (ENG 202): A- (3 credits)
- Physics (PHYS 101): B (3 credits)
- Statistics (STAT 205): A (3 credits)
- Philosophy (PHIL 101): B+ (2 credits)

Current GPA: 3.7
Total Credit Hours: 18

This is an official transcript issued by the University of Eastern Africa, Baraton.
Date of Issue: ${new Date().toLocaleDateString()}
    `;

    // Create and download the transcript
    const element = document.createElement('a');
    const file = new Blob([transcriptContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'academic_transcript.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <div className="min-h-screen bg-gray-50">
            <Header user={user} onLogout={handleLogout} />
            <div className="flex items-center gap-2 px-4 py-2 border-b bg-white">
              <SidebarTrigger />
              <div className="h-4 w-px bg-gray-300" />
              <h1 className="text-lg font-semibold">Academic Records</h1>
              <div className="ml-auto">
                <Button onClick={handleDownloadTranscript} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Transcript
                </Button>
              </div>
            </div>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Current Semester Performance
                    </CardTitle>
                    <CardDescription>Academic performance for Spring 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">3.7</div>
                        <div className="text-sm text-gray-600">Current GPA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">6</div>
                        <div className="text-sm text-gray-600">Courses</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">18</div>
                        <div className="text-sm text-gray-600">Credit Hours</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Grade Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { course: "Advanced Mathematics", code: "MATH 301", grade: "A", credits: 3 },
                        { course: "Computer Science Fundamentals", code: "CS 201", grade: "B+", credits: 4 },
                        { course: "English Literature", code: "ENG 202", grade: "A-", credits: 3 },
                        { course: "Physics", code: "PHYS 101", grade: "B", credits: 3 },
                        { course: "Statistics", code: "STAT 205", grade: "A", credits: 3 },
                        { course: "Philosophy", code: "PHIL 101", grade: "B+", credits: 2 }
                      ].map((course, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <div className="font-medium">{course.course}</div>
                            <div className="text-sm text-gray-600">{course.code}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg">{course.grade}</div>
                            <div className="text-sm text-gray-600">{course.credits} credits</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AcademicRecords;
