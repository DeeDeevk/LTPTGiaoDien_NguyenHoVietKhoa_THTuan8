import './Overview.css'
import { useEffect, useState } from 'react';
import { ShoppingCart, DollarSign, UserPlus } from 'lucide-react';

export default function Overview() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://67e3688c2ae442db76d000dd.mockapi.io/customer')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setIsLoading(false);
      });
  }, []);

  const turnover = 92405; // giá trị giả lập
  const profit = 32218;   // giá trị giả lập
  const newCustomers = customers.length;

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <span className="text-pink-600">⬛</span> Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card
          title="Turnover"
          value={`$${turnover.toLocaleString()}`}
          change="+5.39%"
          color="bg-pink-50"
          icon={<ShoppingCart className="text-pink-500" />}
        />
        <Card
          title="Profit"
          value={`$${profit.toLocaleString()}`}
          change="+5.39%"
          color="bg-blue-50"
          icon={<DollarSign className="text-blue-500" />}
        />
        <Card
          title="New customer"
          value={isLoading ? 'Loading...' : newCustomers}
          change="+6.84%"
          color="bg-blue-50"
          icon={<UserPlus className="text-blue-500" />}
        />
      </div>
    </div>
  );
}

function Card({ title, value, change, color, icon }) {
  return (
    <div className={`p-4 rounded-lg ${color}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className="p-2 rounded-md bg-white shadow text-xl">
          {icon}
        </div>
      </div>
      <p className="text-green-600 text-sm mt-2">{change} period of change</p>
    </div>
  );
}
