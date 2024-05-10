/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rcyJNDpFI0I
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center border-b bg-gray-900 px-6">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6 text-white" />
          <span className="text-lg font-semibold text-white">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#">
            Dashboard
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#">
            Products
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#">
            Orders
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#">
            Customers
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#">
            Settings
          </Link>
        </nav>
      </header>
      <div className="flex flex-1">
        <div className="hidden w-64 shrink-0 border-r bg-gray-100 dark:bg-gray-800 lg:block">
          <nav className="flex flex-col gap-2 p-4">
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              <HomeIcon className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              <PackageIcon className="h-5 w-5" />
              Products
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Orders
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              <UsersIcon className="h-5 w-5" />
              Customers
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              <SettingsIcon className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </div>
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-600">$125,000</p>
                <p className="mt-2 text-gray-500">This month's total revenue from all sales.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>New Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-600">1,250</p>
                <p className="mt-2 text-gray-500">New customers acquired this month.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pending Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-600">375</p>
                <p className="mt-2 text-gray-500">Orders that are currently awaiting fulfillment.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Widget A</h4>
                      <p className="text-gray-500">Category X</p>
                    </div>
                    <p className="font-bold text-green-600">1,250 units</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Gadget B</h4>
                      <p className="text-gray-500">Category Y</p>
                    </div>
                    <p className="font-bold text-green-600">950 units</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Thingamajig C</h4>
                      <p className="text-gray-500">Category Z</p>
                    </div>
                    <p className="font-bold text-green-600">750 units</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-600">4.8/5</p>
                <p className="mt-2 text-gray-500">Average customer satisfaction rating.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Inventory Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Widget A</h4>
                      <p className="text-gray-500">Category X</p>
                    </div>
                    <p className="font-bold text-green-600">2,500 in stock</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Gadget B</h4>
                      <p className="text-gray-500">Category Y</p>
                    </div>
                    <p className="font-bold text-green-600">1,750 in stock</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Thingamajig C</h4>
                      <p className="text-gray-500">Category Z</p>
                    </div>
                    <p className="font-bold text-green-600">1,250 in stock</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}