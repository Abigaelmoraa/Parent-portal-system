
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle, XCircle, Clock } from "lucide-react";

export const AttendanceReport = () => {
  const attendanceData = [
    { course: "Data Structures", attended: 28, total: 30, percentage: 93.3, status: "excellent" },
    { course: "Database Systems", attended: 25, total: 28, percentage: 89.3, status: "good" },
    { course: "Web Development", attended: 22, total: 26, percentage: 84.6, status: "good" },
    { course: "Software Engineering", attended: 18, total: 24, percentage: 75.0, status: "warning" },
    { course: "Computer Networks", attended: 16, total: 22, percentage: 72.7, status: "warning" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "good":
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case "warning":
        return <Clock className="h-4 w-4 text-orange-600" />;
      default:
        return <XCircle className="h-4 w-4 text-red-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600 bg-green-50";
      case "good":
        return "text-blue-600 bg-blue-50";
      case "warning":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-red-600 bg-red-50";
    }
  };

  const overallAttendance = attendanceData.reduce((acc, course) => acc + course.percentage, 0) / attendanceData.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Attendance Report
        </CardTitle>
        <CardDescription>Class attendance summary for current semester</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-900">Overall Attendance</span>
            <span className="text-2xl font-bold text-blue-900">{overallAttendance.toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {attendanceData.map((course) => (
            <div key={course.course} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium">{course.course}</h4>
                <p className="text-sm text-gray-600">
                  {course.attended} of {course.total} classes attended
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                  {course.percentage}%
                </span>
                {getStatusIcon(course.status)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
