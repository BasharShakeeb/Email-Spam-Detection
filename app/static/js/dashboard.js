// ==================== DASHBOARD INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    loadDashboardData();
});

let distributionChart, timeSeriesChart, hourlyChart;

// ==================== LOAD DASHBOARD DATA ====================
async function loadDashboardData() {
    try {
        const response = await fetch('/api/stats');
        const stats = await response.json();

        if (stats.total_predictions === 0) {
            showNoDataMessage();
            return;
        }

        updateStatsCards(stats);
        createDistributionChart(stats);
        createTimeSeriesChart(stats);
        createHourlyChart(stats);
        populatePredictionsTable(stats.recent_predictions);

    } catch (error) {
        console.error('Error loading dashboard:', error);
        showErrorMessage();
    }
}

// ==================== UPDATE STATS CARDS ====================
function updateStatsCards(stats) {
    document.getElementById('totalPredictions').textContent = stats.total_predictions;
    document.getElementById('spamCount').textContent = stats.spam_count;
    document.getElementById('hamCount').textContent = stats.ham_count;
    document.getElementById('spamRate').textContent = stats.spam_percentage + '%';
}

// ==================== DISTRIBUTION PIE CHART ====================
function createDistributionChart(stats) {
    const ctx = document.getElementById('distributionChart').getContext('2d');

    distributionChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Spam', 'Not Spam'],
            datasets: [{
                data: [stats.spam_count, stats.ham_count],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(16, 185, 129, 0.8)'
                ],
                borderColor: [
                    'rgba(239, 68, 68, 1)',
                    'rgba(16, 185, 129, 1)'
                ],
                borderWidth: 2,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f9fafb',
                        padding: 20,
                        font: {
                            size: 14,
                            family: 'Inter'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    titleColor: '#f9fafb',
                    bodyColor: '#f9fafb',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            let value = context.parsed || 0;
                            let total = context.dataset.data.reduce((a, b) => a + b, 0);
                            let percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// ==================== TIME SERIES CHART ====================
function createTimeSeriesChart(stats) {
    const ctx = document.getElementById('timeSeriesChart').getContext('2d');

    // Process hourly data
    const labels = stats.hourly_data.map(d => d.hour);
    const spamData = stats.hourly_data.map(d => d.spam);
    const hamData = stats.hourly_data.map(d => d.ham);

    timeSeriesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Spam',
                    data: spamData,
                    borderColor: 'rgba(239, 68, 68, 1)',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'Not Spam',
                    data: hamData,
                    borderColor: 'rgba(16, 185, 129, 1)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f9fafb',
                        padding: 20,
                        font: {
                            size: 14,
                            family: 'Inter'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    titleColor: '#f9fafb',
                    bodyColor: '#f9fafb',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: 'Inter'
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#9ca3af',
                        stepSize: 1,
                        font: {
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    });
}

// ==================== HOURLY ACTIVITY CHART ====================
function createHourlyChart(stats) {
    const ctx = document.getElementById('hourlyChart').getContext('2d');

    const labels = stats.hourly_data.map(d => d.hour);
    const totalData = stats.hourly_data.map(d => d.total);

    hourlyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Predictions',
                data: totalData,
                backgroundColor: stats.hourly_data.map(d => {
                    const spamRatio = d.spam / d.total;
                    if (spamRatio > 0.5) {
                        return 'rgba(239, 68, 68, 0.7)';
                    } else if (spamRatio > 0.3) {
                        return 'rgba(245, 158, 11, 0.7)';
                    } else {
                        return 'rgba(16, 185, 129, 0.7)';
                    }
                }),
                borderColor: stats.hourly_data.map(d => {
                    const spamRatio = d.spam / d.total;
                    if (spamRatio > 0.5) {
                        return 'rgba(239, 68, 68, 1)';
                    } else if (spamRatio > 0.3) {
                        return 'rgba(245, 158, 11, 1)';
                    } else {
                        return 'rgba(16, 185, 129, 1)';
                    }
                }),
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f9fafb',
                        padding: 20,
                        font: {
                            size: 14,
                            family: 'Inter'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    titleColor: '#f9fafb',
                    bodyColor: '#f9fafb',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        afterLabel: function(context) {
                            const hourData = stats.hourly_data[context.dataIndex];
                            return `Spam: ${hourData.spam} | Not Spam: ${hourData.ham}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: 'Inter'
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#9ca3af',
                        stepSize: 1,
                        font: {
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    });
}

// ==================== POPULATE PREDICTIONS TABLE ====================
function populatePredictionsTable(predictions) {
    const tbody = document.getElementById('predictionsTableBody');
    
    if (!predictions || predictions.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="no-data">No predictions yet</td></tr>';
        return;
    }

    tbody.innerHTML = predictions.map((pred, index) => {
        const time = new Date(pred.timestamp).toLocaleString();
        const badgeClass = pred.is_spam ? 'badge-spam' : 'badge-ham';
        const badgeText = pred.prediction;
        
        return `
            <tr>
                <td>${predictions.length - index}</td>
                <td class="message-preview">${pred.message}</td>
                <td><span class="badge ${badgeClass}">${badgeText}</span></td>
                <td class="time-cell">${time}</td>
            </tr>
        `;
    }).join('');
}

// ==================== NO DATA MESSAGE ====================
function showNoDataMessage() {
    const chartsGrid = document.querySelector('.charts-grid');
    chartsGrid.innerHTML = `
        <div class="no-data-message">
            <div class="no-data-icon">📊</div>
            <h3>No Data Yet</h3>
            <p>Start analyzing messages to see statistics and charts here.</p>
            <a href="/" class="btn-primary" style="margin-top: 1.5rem; display: inline-flex;">
                Go to Analyzer
            </a>
        </div>
    `;
}

// ==================== ERROR MESSAGE ====================
function showErrorMessage() {
    const chartsGrid = document.querySelector('.charts-grid');
    chartsGrid.innerHTML = `
        <div class="no-data-message">
            <div class="no-data-icon">⚠️</div>
            <h3>Error Loading Data</h3>
            <p>Unable to load dashboard data. Please try again later.</p>
        </div>
    `;
}
