'use client';

import { useState, useEffect } from 'react';
import { 
  Lock, 
  Unlock, 
  Save, 
  Plus, 
  Trash2, 
  Calendar, 
  TrendingUp, 
  FileSpreadsheet,
  LogOut,
  CheckCircle,
  AlertCircle,
  Mail,
  KeyRound
} from 'lucide-react';

export default function AdminComplaintsPage() {
  const [email] = useState('jaychudasama2611@gmail.com');
  const [otpCode, setOtpCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  
  const [loginError, setLoginError] = useState('');
  const [otpMessage, setOtpMessage] = useState('');
  
  const [currentMonthName, setCurrentMonthName] = useState('May 2026');
  const [currentMonthData, setCurrentMonthData] = useState([]);
  const [monthlyTrendData, setMonthlyTrendData] = useState([]);
  const [annualTrendData, setAnnualTrendData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // { type: 'success'|'error', message: '' }

  // Check login on load
  useEffect(() => {
    const sessionToken = localStorage.getItem('complaints_admin_token');
    if (sessionToken) {
      setIsLoggedIn(true);
      fetchData(sessionToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchData = async (token) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/complaints', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const json = await res.json();
        setCurrentMonthName(json.currentMonthName || '');
        setCurrentMonthData(json.currentMonthData || []);
        setMonthlyTrendData(json.monthlyTrendData || []);
        setAnnualTrendData(json.annualTrendData || []);
      } else {
        handleLogout();
      }
    } catch (e) {
      console.error('Failed to fetch data', e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendOtp = async (e) => {
    if (e) e.preventDefault();
    setIsSendingOtp(true);
    setLoginError('');
    setOtpMessage('');

    try {
      const res = await fetch('/api/auth/otp/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const json = await res.json();
      if (res.ok) {
        setOtpSent(true);
        setOtpMessage(json.message || 'OTP code sent. Please check your email.');
      } else {
        setLoginError(json.error || 'Failed to send OTP code.');
      }
    } catch (err) {
      setLoginError('SMTP transmission failed. Contact local administrator.');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otpCode || otpCode.length !== 6) {
      setLoginError('Enter a valid 6-digit OTP code.');
      return;
    }

    setIsVerifying(true);
    setLoginError('');

    try {
      const res = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: otpCode })
      });

      const json = await res.json();
      if (res.ok) {
        localStorage.setItem('complaints_admin_token', json.token);
        setIsLoggedIn(true);
        setOtpSent(false);
        setOtpCode('');
        fetchData(json.token);
      } else {
        setLoginError(json.error || 'Verification code invalid.');
      }
    } catch (err) {
      setLoginError('Authentication verification call failed.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('complaints_admin_token');
    setIsLoggedIn(false);
    setOtpSent(false);
    setOtpCode('');
  };

  const handleSave = async () => {
    const token = localStorage.getItem('complaints_admin_token');
    if (!token) return;

    setIsSaving(true);
    setSaveStatus(null);

    const payload = {
      currentMonthName,
      currentMonthData,
      monthlyTrendData,
      annualTrendData
    };

    try {
      const res = await fetch('/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSaveStatus({ type: 'success', message: 'Disclosures saved successfully! The live site will reflect updates immediately.' });
        setTimeout(() => setSaveStatus(null), 5000);
      } else {
        const json = await res.json();
        setSaveStatus({ type: 'error', message: json.error || 'Failed to save disclosures.' });
      }
    } catch (e) {
      setSaveStatus({ type: 'error', message: 'Network error occurred while saving.' });
    } finally {
      setIsSaving(false);
    }
  };

  const updateCurrentMonthRow = (index, field, value) => {
    const updated = [...currentMonthData];
    updated[index][field] = value;
    setCurrentMonthData(updated);
  };

  const addMonthlyTrendRow = () => {
    setMonthlyTrendData([
      ...monthlyTrendData,
      { month: 'New Month 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 }
    ]);
  };

  const updateMonthlyTrendRow = (index, field, value) => {
    const updated = [...monthlyTrendData];
    updated[index][field] = value;
    setMonthlyTrendData(updated);
  };

  const deleteMonthlyTrendRow = (index) => {
    const updated = monthlyTrendData.filter((_, i) => i !== index);
    setMonthlyTrendData(updated);
  };

  const addAnnualTrendRow = () => {
    setAnnualTrendData([
      ...annualTrendData,
      { year: '2026-27', carriedForward: 0, received: 0, resolved: 0, pending: 0 }
    ]);
  };

  const updateAnnualTrendRow = (index, field, value) => {
    const updated = [...annualTrendData];
    updated[index][field] = value;
    setAnnualTrendData(updated);
  };

  const deleteAnnualTrendRow = (index) => {
    const updated = annualTrendData.filter((_, i) => i !== index);
    setAnnualTrendData(updated);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl border border-navy/10 shadow-xl">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-navy/5 text-navy flex items-center justify-center border border-navy/10">
              <Lock className="h-6 w-6 text-teal" />
            </div>
            <h2 className="mt-4 text-2xl font-bold font-poppins text-navy">
              Compliance Portal Access
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Authentication required to edit official complaint records.
            </p>
          </div>

          {!otpSent ? (
            <form className="mt-6 space-y-6" onSubmit={handleSendOtp}>
              <div>
                <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                  Admin Email (Authorized)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Mail className="h-4.5 w-4.5" />
                  </span>
                  <input
                    type="email"
                    readOnly
                    value={email}
                    className="w-full pl-10 pr-4 py-2.5 rounded border border-gray-200 bg-gray-50 text-gray-500 font-medium text-sm focus:outline-none select-all cursor-not-allowed"
                  />
                </div>
              </div>

              {loginError && (
                <div className="flex items-center space-x-2 text-xs text-red-600 bg-red-50 p-3 rounded border border-red-200">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSendingOtp}
                className="w-full py-3 px-4 border border-transparent rounded font-semibold text-white bg-navy hover:bg-navy-light text-sm transition-all duration-300 shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{isSendingOtp ? 'Sending OTP...' : 'Get One-Time Password'}</span>
              </button>
            </form>
          ) : (
            <form className="mt-6 space-y-6" onSubmit={handleVerifyOtp}>
              <div>
                <label htmlFor="otp" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                  Enter 6-Digit OTP Code
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <KeyRound className="h-4.5 w-4.5" />
                  </span>
                  <input
                    id="otp"
                    type="text"
                    required
                    maxLength="6"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="123456"
                    className="w-full pl-10 pr-4 py-2.5 rounded border border-gray-200 focus:outline-none focus:border-navy text-sm font-semibold tracking-[0.3em] text-center text-navy"
                  />
                </div>
              </div>

              {otpMessage && (
                <div className="flex items-center space-x-2 text-xs text-green-700 bg-green-50 p-3 rounded border border-green-200">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <span>{otpMessage}</span>
                </div>
              )}

              {loginError && (
                <div className="flex items-center space-x-2 text-xs text-red-600 bg-red-50 p-3 rounded border border-red-200">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full py-3 px-4 border border-transparent rounded font-semibold text-white bg-navy hover:bg-navy-light text-sm transition-all duration-300 shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{isVerifying ? 'Authenticating...' : 'Verify & Log In'}</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={isSendingOtp}
                    className="text-xs font-bold text-teal hover:text-teal-dark hover:underline disabled:opacity-50"
                  >
                    Resend Code
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50/30">
      {/* Top Banner */}
      <section className="bg-navy text-white py-10 border-b-4 border-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Unlock className="h-5 w-5 text-teal-light" />
              <span className="text-xs font-bold uppercase tracking-widest text-teal-light font-poppins">Compliance Panel</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-poppins">
              Complaint Disclosures Editor
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-1.5 self-start md:self-center bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold py-2 px-4 rounded transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </section>

      {/* Editor Body */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="py-20 text-center text-gray-500 font-medium font-poppins animate-pulse">
            Loading database disclosures...
          </div>
        ) : (
          <div className="space-y-10">
            {/* Status alerts */}
            {saveStatus && (
              <div className={`p-4 rounded-xl border flex items-start space-x-3 text-sm font-medium ${
                saveStatus.type === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                {saveStatus.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                )}
                <span>{saveStatus.message}</span>
              </div>
            )}

            {/* Part 1: Current Month Config */}
            <div className="bg-white rounded-2xl border border-navy/10 shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
                <Calendar className="h-6 w-6 text-teal" />
                <h2 className="text-lg md:text-xl font-bold font-poppins text-navy">
                  1. Current Month Disclosure Details
                </h2>
              </div>
              
              <div className="max-w-md">
                <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                  Disclosure Month Title
                </label>
                <input
                  type="text"
                  value={currentMonthName}
                  onChange={(e) => setCurrentMonthName(e.target.value)}
                  placeholder="e.g. May 2026"
                  className="w-full px-4 py-2.5 rounded border border-gray-200 focus:outline-none focus:border-navy text-sm font-medium"
                />
              </div>

              <div className="overflow-x-auto border border-gray-100 rounded-xl">
                <table className="w-full text-left border-collapse min-w-[900px] text-xs">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100 text-navy font-bold">
                      <th className="p-3 pl-4 w-12">S.No</th>
                      <th className="p-3">Received From</th>
                      <th className="p-3 w-32">Pending Last Month</th>
                      <th className="p-3 w-32">Received</th>
                      <th className="p-3 w-32">Resolved</th>
                      <th className="p-3 w-32">Pending &lt; 3 Months</th>
                      <th className="p-3 w-32">Pending &gt; 3 Months</th>
                      <th className="p-3 w-32">Avg Resolution Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {currentMonthData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/30">
                        <td className="p-3 pl-4 font-semibold text-navy">{row.sl}</td>
                        <td className="p-3 font-semibold text-navy">{row.receivedFrom}</td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.pendingLastMonth}
                            onChange={(e) => updateCurrentMonthRow(i, 'pendingLastMonth', parseInt(e.target.value) || 0)}
                            className="w-20 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.received}
                            onChange={(e) => updateCurrentMonthRow(i, 'received', parseInt(e.target.value) || 0)}
                            className="w-20 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.resolved}
                            onChange={(e) => updateCurrentMonthRow(i, 'resolved', parseInt(e.target.value) || 0)}
                            className="w-20 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.pendingLessThan3}
                            onChange={(e) => updateCurrentMonthRow(i, 'pendingLessThan3', parseInt(e.target.value) || 0)}
                            className="w-20 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.pendingMoreThan3}
                            onChange={(e) => updateCurrentMonthRow(i, 'pendingMoreThan3', parseInt(e.target.value) || 0)}
                            className="w-20 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="text"
                            value={row.avgResolutionTime}
                            onChange={(e) => updateCurrentMonthRow(i, 'avgResolutionTime', e.target.value)}
                            placeholder="e.g. 0 days"
                            className="w-24 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Part 2: Monthly Trends */}
            <div className="bg-white rounded-2xl border border-navy/10 shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 gap-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-teal" />
                  <h2 className="text-lg md:text-xl font-bold font-poppins text-navy">
                    2. Monthly Complaint History Trend
                  </h2>
                </div>
                <button
                  onClick={addMonthlyTrendRow}
                  className="flex items-center space-x-1 bg-teal hover:bg-teal-dark text-white text-xs font-bold py-2 px-3 rounded shadow transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Month Row</span>
                </button>
              </div>

              <div className="overflow-x-auto border border-gray-100 rounded-xl">
                <table className="w-full text-left border-collapse min-w-[700px] text-xs">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100 text-navy font-bold">
                      <th className="p-3 pl-4 w-12">S.No</th>
                      <th className="p-3">Month Name</th>
                      <th className="p-3 w-36">Carried Forward</th>
                      <th className="p-3 w-32">Received</th>
                      <th className="p-3 w-32">Resolved</th>
                      <th className="p-3 w-32">Pending</th>
                      <th className="p-3 w-16 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {monthlyTrendData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/30">
                        <td className="p-3 pl-4 font-semibold text-navy">{i + 1}</td>
                        <td className="p-3">
                          <input
                            type="text"
                            value={row.month}
                            onChange={(e) => updateMonthlyTrendRow(i, 'month', e.target.value)}
                            placeholder="e.g. June 2025"
                            className="w-32 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.carriedForward}
                            onChange={(e) => updateMonthlyTrendRow(i, 'carriedForward', parseInt(e.target.value) || 0)}
                            className="w-24 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.received}
                            onChange={(e) => updateMonthlyTrendRow(i, 'received', parseInt(e.target.value) || 0)}
                            className="w-24 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.resolved}
                            onChange={(e) => updateMonthlyTrendRow(i, 'resolved', parseInt(e.target.value) || 0)}
                            className="w-24 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.pending}
                            onChange={(e) => updateMonthlyTrendRow(i, 'pending', parseInt(e.target.value) || 0)}
                            className="w-24 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => deleteMonthlyTrendRow(i)}
                            className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Part 3: Annual Trends */}
            <div className="bg-white rounded-2xl border border-navy/10 shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 gap-4">
                <div className="flex items-center space-x-3">
                  <FileSpreadsheet className="h-6 w-6 text-teal" />
                  <h2 className="text-lg md:text-xl font-bold font-poppins text-navy">
                    3. Annual Complaint History Trend
                  </h2>
                </div>
                <button
                  onClick={addAnnualTrendRow}
                  className="flex items-center space-x-1 bg-teal hover:bg-teal-dark text-white text-xs font-bold py-2 px-3 rounded shadow transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add FY Row</span>
                </button>
              </div>

              <div className="overflow-x-auto border border-gray-100 rounded-xl">
                <table className="w-full text-left border-collapse min-w-[700px] text-xs">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100 text-navy font-bold">
                      <th className="p-3 pl-4 w-12">S.No</th>
                      <th className="p-3">Financial Year</th>
                      <th className="p-3 w-36">Carried Forward</th>
                      <th className="p-3 w-32">Received</th>
                      <th className="p-3 w-32">Resolved</th>
                      <th className="p-3 w-32">Pending</th>
                      <th className="p-3 w-16 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {annualTrendData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/30">
                        <td className="p-3 pl-4 font-semibold text-navy">{i + 1}</td>
                        <td className="p-3">
                          <input
                            type="text"
                            value={row.year}
                            onChange={(e) => updateAnnualTrendRow(i, 'year', e.target.value)}
                            placeholder="e.g. 2025-26"
                            className="w-32 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.carriedForward}
                            onChange={(e) => updateAnnualTrendRow(i, 'carriedForward', parseInt(e.target.value) || 0)}
                            className="w-24 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.received}
                            onChange={(e) => updateAnnualTrendRow(i, 'received', parseInt(e.target.value) || 0)}
                            className="w-24 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.resolved}
                            onChange={(e) => updateAnnualTrendRow(i, 'resolved', parseInt(e.target.value) || 0)}
                            className="w-24 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={row.pending}
                            onChange={(e) => updateAnnualTrendRow(i, 'pending', parseInt(e.target.value) || 0)}
                            className="w-24 px-2.5 py-1.5 border border-gray-200 rounded text-xs font-semibold focus:outline-none"
                          />
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => deleteAnnualTrendRow(i)}
                            className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Actions Floating Bar */}
            <div className="sticky bottom-6 bg-white border border-navy/10 rounded-2xl shadow-lg p-4 flex items-center justify-between gap-4 max-w-lg mx-auto md:max-w-none">
              <span className="text-xs text-gray-500 font-semibold hidden md:inline">
                ⚠️ Double-check entries before saving. These affect legally-mandated SEBI disclosures.
              </span>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="w-full md:w-auto ml-auto flex items-center justify-center space-x-2 bg-navy hover:bg-navy-light text-white font-bold py-3.5 px-8 rounded shadow-md transition-all duration-300 disabled:opacity-50"
              >
                <Save className="h-4.5 w-4.5" />
                <span>{isSaving ? 'Saving Changes...' : 'Save All Disclosures'}</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
