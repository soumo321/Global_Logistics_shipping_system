// Dummy shipment data (frontend only)
const shipments = [
  {
    trackingId: "TRK001",
    sender: "Soumodip",
    receiver: "Rahul",
    status: "Pending",
    currentLocation: "Kolkata"
  },
  {
    trackingId: "TRK002",
    sender: "Amit",
    receiver: "Priya",
    status: "In Transit",
    currentLocation: "Delhi"
  },
  {
    trackingId: "TRK003",
    sender: "Riya",
    receiver: "Ankit",
    status: "Delivered",
    currentLocation: "Mumbai"
  },
  {
    trackingId: "TRK004",
    sender: "Neha",
    receiver: "Arjun",
    status: "In Transit",
    currentLocation: "Hyderabad"
  }
];

function loadDashboard() {
  const table = document.getElementById("shipmentTable");

  let pending = 0;
  let transit = 0;
  let delivered = 0;

  shipments.forEach((s) => {
    // Count statuses
    if (s.status === "Pending") pending++;
    else if (s.status === "In Transit") transit++;
    else if (s.status === "Delivered") delivered++;

    // Add rows
    const row = `
      <tr>
        <td>${s.trackingId}</td>
        <td>${s.sender}</td>
        <td>${s.receiver}</td>
        <td>${s.status}</td>
        <td>${s.currentLocation}</td>
      </tr>
    `;

    table.innerHTML += row;
  });

  // Update cards
  document.getElementById("pendingCount").innerText = pending;
  document.getElementById("transitCount").innerText = transit;
  document.getElementById("deliveredCount").innerText = delivered;
}

// Load data on page open
loadDashboard();