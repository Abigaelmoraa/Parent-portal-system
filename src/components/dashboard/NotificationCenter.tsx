
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, AlertTriangle, Info, CheckCircle, Calendar } from "lucide-react";

export const NotificationCenter = () => {
  const notifications = [
    {
      id: 1,
      type: "urgent",
      title: "Fee Payment Reminder",
      message: "Your next semester fee payment of KSh 5,000 is due on March 15, 2025.",
      date: "2025-02-28",
      read: false
    },
    {
      id: 2,
      type: "info",
      title: "Mid-Semester Examinations",
      message: "Mid-semester exams will begin on March 20, 2025. Exam timetable is now available.",
      date: "2025-02-26",
      read: false
    },
    {
      id: 3,
      type: "success",
      title: "Academic Performance",
      message: "Congratulations! Your ward achieved a GPA of 3.7 this semester.",
      date: "2025-02-25",
      read: true
    },
    {
      id: 4,
      type: "warning",
      title: "Attendance Alert",
      message: "Attendance for Computer Networks is below 75%. Please ensure regular class attendance.",
      date: "2025-02-24",
      read: true
    },
    {
      id: 5,
      type: "info",
      title: "Library Hours Extended",
      message: "Library will now be open 24/7 during the examination period.",
      date: "2025-02-20",
      read: true
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "urgent":
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "info":
        return <Info className="h-4 w-4 text-blue-600" />;
      default:
        return <Bell className="h-4 w-4 text-gray-600" />;
    }
  };

  const getNotificationBg = (type: string, read: boolean) => {
    const opacity = read ? "50" : "100";
    switch (type) {
      case "urgent":
        return `bg-red-${opacity} border-red-200`;
      case "warning":
        return `bg-orange-${opacity} border-orange-200`;
      case "success":
        return `bg-green-${opacity} border-green-200`;
      case "info":
        return `bg-blue-${opacity} border-blue-200`;
      default:
        return `bg-gray-${opacity} border-gray-200`;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notifications
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {unreadCount}
            </span>
          )}
        </CardTitle>
        <CardDescription>Important updates and announcements</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-4 rounded-lg border ${getNotificationBg(notification.type, notification.read)} ${
              !notification.read ? 'border-l-4' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              {getNotificationIcon(notification.type)}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-600'}`}>
                    {notification.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{notification.date}</span>
                  </div>
                </div>
                <p className={`text-sm ${!notification.read ? 'text-gray-800' : 'text-gray-600'}`}>
                  {notification.message}
                </p>
                {!notification.read && (
                  <div className="mt-2">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
