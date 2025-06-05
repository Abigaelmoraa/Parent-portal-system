
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, CreditCard, AlertCircle, CheckCircle } from "lucide-react";

export const FinanceReport = () => {
  const financeData = {
    totalFees: 25000,
    paidAmount: 20000,
    pendingAmount: 5000,
    nextDueDate: "March 15, 2025",
    scholarshipAmount:5000,
    transactions: [
      { date: "2025-01-15", description: "Semester Fees Payment", amount: 12000, status: "paid" },
      { date: "2025-01-10", description: "Library Fees", amount: 4000, status: "paid" },
      { date: "2024-12-20", description: "Registration Fees", amount: 4000, status: "paid" },
      { date: "2025-12-15", description: "Tuition Fees", amount: 5000, status: "unpaid" }
    ]
  };

  const paymentPercentage = (financeData.paidAmount / financeData.totalFees) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Finance Report
        </CardTitle>
        <CardDescription>Fee payments and financial summary</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Paid Amount</span>
            </div>
            <p className="text-2xl font-bold text-green-900">
              KSh {financeData.paidAmount.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">Pending Amount</span>
            </div>
            <p className="text-2xl font-bold text-orange-900">
              KSh {financeData.pendingAmount.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Payment Progress</span>
            </div>
            <p className="text-2xl font-bold text-blue-900">
              {paymentPercentage.toFixed(1)}%
            </p>
          </div>
        </div>

        {financeData.scholarshipAmount > 0 && (
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-medium text-purple-900 mb-1">Scholarship Applied</h4>
            <p className="text-lg font-semibold text-purple-900">
              KSh {financeData.scholarshipAmount.toLocaleString()}
            </p>
          </div>
        )}

        <div className="space-y-3">
          <h4 className="font-medium">Recent Transactions</h4>
          {financeData.transactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h5 className="font-medium">{transaction.description}</h5>
                <p className="text-sm text-gray-600">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">KSh {transaction.amount.toLocaleString()}</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {financeData.pendingAmount > 0 && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <span className="font-medium text-red-800">Payment Due</span>
            </div>
            <p className="text-sm text-red-700">
              Next payment of KSh {financeData.pendingAmount.toLocaleString()} is due on {financeData.nextDueDate}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
