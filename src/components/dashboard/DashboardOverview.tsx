
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Calendar, DollarSign, Bell, User, TrendingUp } from "lucide-react";
import { StudentInfo } from './StudentInfo';
import { AttendanceReport } from './AttendanceReport';
import { FinanceReport } from './FinanceReport';
import { NotificationCenter } from './NotificationCenter';

export const DashboardOverview = () => {
  const stats = [
    {
      title: "Current GPA",
      value: "3.7",
      description: "This semester",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Courses",
      value: "6",
      description: "Active this semester",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      title: "Next Payment",
      value: "KSh 5,000",
      description: "Due March 15, 2025",
      icon: DollarSign,
      color: "text-orange-600"
    },
    {
      title: "Attendance",
      value: "94%",
      description: "This semester",
      icon: Calendar,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome to your UEAB Parent Portal</p>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Dashboard Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="student">Student Info</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="academic records">Academic Records</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
                <CardDescription>Latest updates from UEAB</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Mid-Semester Examinations</h4>
                  <p className="text-sm text-gray-600">Exams will begin on March 20, 2025. Please ensure all fees are paid.</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">New Library Hours</h4>
                  <p className="text-sm text-gray-600">Library will now be open 24/7 during examination period.</p>
                  <p className="text-xs text-gray-500">1 week ago</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">View Grade Report</h4>
                  <p className="text-sm text-gray-600">Check latest academic performance</p>
                </button>
                <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Pay Fees Online</h4>
                  <p className="text-sm text-gray-600">Make secure payments via M-Pesa</p>
                </button>
                <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">Contact Advisor</h4>
                  <p className="text-sm text-gray-600">Send a message to academic advisor</p>
                </button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="student">
          <StudentInfo />
        </TabsContent>

        <TabsContent value="attendance">
          <AttendanceReport />
        </TabsContent>

        <TabsContent value="finance">
          <FinanceReport />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationCenter />
        </TabsContent>
      </Tabs>
    </div>
  );
};
