import {Helmet} from "react-helmet-async";
import {Card} from "../../components/card/Card.tsx";
import {Icon} from "@iconify/react";
import {Users} from "../../dammy/users.ts";
import {TableBody, TableContainer, TableHeader} from "../../components/table/TableContainer.tsx";
import {TablePaginate} from "../../components/table/TablePaginate.tsx";
import {LoadingCard} from "../../components/loading/LoadingCard.tsx";
import {useState} from "react";
import {ChartComponent} from "../../components/chart/ChartComponent.tsx";
import {ChartPieChartPure} from "../../components/chart/ChartPieChartPure.tsx";
// import {useTranslation} from "react-i18next";

export const DashboardPage = () => {
  const [loading, setLoading] = useState(true)
  setInterval(() => {
    setLoading(false)
  }, 1000)
  const user = new Users().getUsers();
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className={`sm:col-span-7 md:col-span-6 lg:col-span-5 xl:col-span-6 flex flex-col w-auto`}>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2">
          {loading ? (
            <LoadingCard />
          ) : (
            <Card to={"/admin/users"}>
            <div
              className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
              <Icon icon={`bi:people-fill`} className="w-6 h-6"/>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Subscribers
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                71,897
              </p>
            </div>
          </Card>
          )}

          {loading ? (
            <LoadingCard />
          ) : (
            <Card>
              <div
                className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                <Icon icon={`bi:cart-fill`} className="w-6 h-6"/>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Sales
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  $ 46,873.89
                </p>
              </div>
            </Card>
          )}
          {loading ? (
            <LoadingCard />
          ) : (
            <Card>
              <div
                className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                <Icon icon={`bi:layers-fill`} className="w-6 h-6"/>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Orders
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  2,204
                </p>
              </div>
            </Card>
          )}
          {loading ? (
            <LoadingCard />
          ) : (
            <Card>
              <div
                className="p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500">
                <Icon icon={`bi:pie-chart-fill`} className="w-6 h-6"/>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Conversion Rate
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  0.79%
                </p>
              </div>
            </Card>
          )}
        </div>
        {/*Chart */}
        <div className={`grid gap-6 mb-8 md:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1`}>
          {loading ? (
            <LoadingCard />
          ) : (
            <Card>
              <ChartComponent />
            </Card>
          )}

          {loading ? (
            <LoadingCard />
          ) : (
            <Card>
              <ChartPieChartPure />
            </Card>
          )}
        </div>
        {/*Table goes here*/}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-8 lg:-mx-8 md:-mx-6">
            <div className="py-2 inline-block min-w-full sm:px-6 md:px-6 lg:px-8">
              {loading ? (
                <LoadingCard />
              ) : (
                <>
                  <TableContainer search={false}>
                    <TableHeader data={["Name", "Title", "Status", "Role"]} />
                    <TableBody>
                      {user.data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={item.avatar}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                                  {item.name}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-300">
                                  {item.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-gray-200">{item.title}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-300">{item.department}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-500 dark:text-green-100">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {item.role}
                          </td>
                        </tr>
                      ))}
                    </TableBody>
                  </TableContainer>
                  <TablePaginate totalItems={user.count} itemsPerPage={user.size} currentPage={user.page} onPageChange={(page) => console.log(page)}/>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}