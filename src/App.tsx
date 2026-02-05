import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apollo';
import { BooksPage } from './pages/BooksPage';
import { BookDetailsPage } from './pages/BookDetailsPage';
import { AddBookPage } from './pages/AddBookPage';
import { EditBookPage } from './pages/EditBookPage';
import { DashboardPage } from './pages/DashboardPage';
import { AiOutlineBook, AiOutlineHome, AiOutlineBarChart } from 'react-icons/ai';

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <AiOutlineBook className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Book Lister</span>
            </Link>

            <div className="flex gap-4">
              <Link
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/')
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <AiOutlineHome className="w-5 h-5" />
                Books
              </Link>

              <Link
                to="/dashboard"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/dashboard')
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <AiOutlineBarChart className="w-5 h-5" />
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<BooksPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/books/new" element={<AddBookPage />} />
              <Route path="/books/:id" element={<BookDetailsPage />} />
              <Route path="/books/:id/edit" element={<EditBookPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;