
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from '../components/layout/AppSidebar';
import { Header } from '../components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from 'lucide-react';

const Schedule = () => {
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

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const schedule = [
    { day: "Monday", classes: [
      { time: "8:00 AM - 10:00 AM", course: "Advanced Mathematics", location: "Room 101", instructor: "Dr. Smith" },
      { time: "2:00 PM - 4:00 PM", course: "Computer Science", location: "Lab 204", instructor: "Prof. Johnson" }
    ]},
    { day: "Tuesday", classes: [
      { time: "10:00 AM - 12:00 PM", course: "English Literature", location: "Room 205", instructor: "Dr. Brown" },
      { time: "3:00 PM - 5:00 PM", course: "Physics", location: "Lab 301", instructor: "Prof. Davis" }
    ]},
    { day: "Wednesday", classes: [
      { time: "9:00 AM - 11:00 AM", course: "Statistics", location: "Room 102", instructor: "Dr. Wilson" },
      { time: "1:00 PM - 3:00 PM", course: "Philosophy", location: "Room 303", instructor: "Prof. Taylor" }
    ]},
    { day: "Thursday", classes: [
      { time: "8:00 AM - 10:00 AM", course: "Advanced Mathematics", location: "Room 101", instructor: "Dr. Smith" },
      { time: "2:00 PM - 4:00 PM", course: "Computer Science", location: "Lab 204", instructor: "Prof. Johnson" }
    ]},
    { day: "Friday", classes: [
      { time: "10:00 AM - 12:00 PM", course: "English Literature", location: "Room 205", instructor: "Dr. Brown" },
      { time: "3:00 PM - 5:00 PM", course: "Physics", location: "Lab 301", instructor: "Prof. Davis" }
    ]}
  ];

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
              <h1 className="text-lg font-semibold">Class Schedule</h1>
            </div>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Weekly Schedule
                    </CardTitle>
                    <CardDescription>Spring 2024 Class Timetable</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {schedule.map((day, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-lg mb-3">{day.day}</h3>
                          <div className="space-y-3">
                            {day.classes.map((cls, clsIndex) => (
                              <div key={clsIndex} className="border-l-4 border-blue-500 pl-4 py-2">
                                <div className="flex items-center gap-2 mb-1">
                                  <Clock className="h-4 w-4 text-gray-500" />
                                  <span className="font-medium">{cls.time}</span>
                                </div>
                                <div className="text-lg font-semibold">{cls.course}</div>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {cls.location}
                                  </div>
                                  <div>{cls.instructor}</div>
                                </div>
                              </div>
                            ))}
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

export default Schedule;
