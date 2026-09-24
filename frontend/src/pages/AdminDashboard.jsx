import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';

const AdminDashboard = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplicants = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const response = await api.get('/admin/applicants', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setApplicants(response.data.applicants || []);
        } else {
          setError(response.data?.error || 'Failed to fetch applicants');
        }
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
          return;
        }
        const errorData = err.response?.data?.error;
        setError(typeof errorData === 'string' ? errorData : (errorData?.message || 'Connection error'));
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  const escapeCSV = (field) => {
    if (field === null || field === undefined) return '';
    const stringField = String(field);
    if (stringField.includes('"') || stringField.includes(',') || stringField.includes('\n')) {
      return `"${stringField.replace(/"/g, '""')}"`;
    }
    return stringField;
  };

  const exportToCSV = () => {
    // Flatten applicant data for CSV
    const csvRows = [];
    
    // Headers
    const headers = ['ID', 'Full Name', 'Email', 'Phone', 'Branch', 'Year', 'Class', 'Division', 'Status', 'Last Step', 'Reg Date', 'Resume Link', 'Applied Positions'];
    csvRows.push(headers.map(escapeCSV).join(','));

    applicants.forEach(applicant => {
      const appliedPositions = applicant.applications?.map(app => {
        const title = `${app.position?.title} at ${app.position?.company?.name}`;
        return app.taskLink ? `${title} (Task: ${app.taskLink})` : title;
      }).join('; ') || 'None';

      const row = [
        applicant.id,
        applicant.fullName,
        applicant.email,
        applicant.phone,
        applicant.branch,
        applicant.year,
        applicant.class,
        applicant.division,
        applicant.status,
        applicant.lastStepCompleted,
        applicant.createdAt ? new Date(applicant.createdAt).toLocaleDateString() : '',
        applicant.resumeLink,
        appliedPositions
      ];
      
      csvRows.push(row.map(escapeCSV).join(','));
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `applicants_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center font-body-md text-on-surface">
        <div className="text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface p-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-display-sm text-display-sm text-on-surface mb-2">Admin Dashboard</h1>
            <p className="text-on-surface-variant font-body-md">Manage and export applicant data</p>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={exportToCSV}
              className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-xl font-label-lg shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:bg-secondary-container/90 transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export to CSV
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-error-container text-on-error-container rounded-xl font-label-lg shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:bg-error-container/90 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-error-container text-on-error-container p-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        <div className="bg-surface-container border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high border-b border-outline-variant">
                  <th className="p-4 font-label-lg text-on-surface-variant">Name</th>
                  <th className="p-4 font-label-lg text-on-surface-variant">Email & Phone</th>
                  <th className="p-4 font-label-lg text-on-surface-variant">Academic details</th>
                  <th className="p-4 font-label-lg text-on-surface-variant">Reg Date</th>
                  <th className="p-4 font-label-lg text-on-surface-variant">Status / Step</th>
                  <th className="p-4 font-label-lg text-on-surface-variant">Positions Applied</th>
                  <th className="p-4 font-label-lg text-on-surface-variant">Resume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {applicants.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-8 text-center text-on-surface-variant">
                      No applicants found.
                    </td>
                  </tr>
                ) : (
                  applicants.map((app) => (
                    <tr key={app.id} className="hover:bg-surface-container-high/50 transition-colors">
                      <td className="p-4 font-body-md font-bold">{app.fullName || '-'}</td>
                      <td className="p-4 font-body-md">
                        <div>{app.email}</div>
                        <div className="text-on-surface-variant text-sm mt-1">{app.phone || 'No phone'}</div>
                      </td>
                      <td className="p-4 font-body-md">
                        <div>{app.branch ? `${app.branch} - Yr ${app.year}` : '-'}</div>
                        <div className="text-on-surface-variant text-sm mt-1">Class: {app.class || '-'}, Div: {app.division || '-'}</div>
                      </td>
                      <td className="p-4 font-body-md text-sm text-on-surface-variant">
                        {app.createdAt ? new Date(app.createdAt).toLocaleDateString() : '-'}
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col gap-2 items-start">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            app.status === 'SUBMITTED' 
                              ? 'bg-primary-container text-on-primary-container' 
                              : 'bg-surface-variant text-on-surface-variant'
                          }`}>
                            {app.status}
                          </span>
                          <span className="text-xs text-on-surface-variant font-bold px-2">
                            Step {app.lastStepCompleted}/5
                          </span>
                        </div>
                      </td>
                      <td className="p-4 font-body-sm text-on-surface-variant">
                        {app.applications?.length > 0 ? (
                          <ul className="list-disc list-inside">
                            {app.applications.map((a, i) => (
                              <li key={i} className="mb-2">
                                {a.position?.title} ({a.position?.company?.name})
                                {a.taskLink && (
                                  <div className="ml-4 mt-1">
                                    <a href={a.taskLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1 font-label-md">
                                      <span className="material-symbols-outlined text-[14px]">link</span>
                                      View Task
                                    </a>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          'None'
                        )}
                      </td>
                      <td className="p-4">
                        {app.resumeLink ? (
                          <a 
                            href={app.resumeLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center gap-1 font-label-md"
                          >
                            <span className="material-symbols-outlined text-[16px]">link</span>
                            Resume
                          </a>
                        ) : (
                          <span className="text-outline font-label-md">-</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
