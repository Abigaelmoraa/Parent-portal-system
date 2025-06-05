
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from '../components/layout/AppSidebar';
import { Header } from '../components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Send, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Messages = () => {
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

  const messages = [
    {
      id: 1,
      from: "Academic Advisor",
      subject: "Progress Review",
      date: "March 10, 2025",
      preview: "Your child is performing well in her courses. However, we encourage more efforts.",
      unread: true
    },
    {
      id: 2,
      from: "Finance Office",
      subject: "Fee Payment Reminder",
      date: "March 8, 2025",
      preview: "This is a friendly reminder that the next semester fee payment is due on March 15, 2025...",
      unread: false
    },
    {
      id: 3,
      from: "Dean's Office",
      subject: "Parent-Teacher Conference",
      date: "March 5, 2025",
      preview: "We are pleased to invite you to the upcoming parent-teacher conference  online scheduled for March 25, 2024 the link will be shared on the day of the conference...",
      unread: false
    }
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
              <h1 className="text-lg font-semibold">Messages</h1>
            </div>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Recent Messages
                      </CardTitle>
                      <CardDescription>Communications from UEAB faculty</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div 
                            key={message.id} 
                            className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                              message.unread ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-gray-500" />
                                <span className="font-medium">{message.from}</span>
                                {message.unread && (
                                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                                )}
                              </div>
                              <span className="text-sm text-gray-500">{message.date}</span>
                            </div>
                            <h4 className="font-semibold mb-1">{message.subject}</h4>
                            <p className="text-sm text-gray-600 line-clamp-2">{message.preview}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </CardTitle>
                      <CardDescription>Contact UEAB faculty or administrators</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">To</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Academic Advisor</option>
                          <option>Finance Office</option>
                          <option>Dean's Office</option>
                          <option>Student Affairs</option>
                          <option>IT Support</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Subject</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md" 
                          placeholder="Enter subject"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <Textarea 
                          placeholder="Type your message here..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Messages;
