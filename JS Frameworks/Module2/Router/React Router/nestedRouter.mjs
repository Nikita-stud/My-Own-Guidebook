//Instead of having to repeat code like header, footer etc,
//we have a parent layout and children layout
//So parent stays, children change else we would change the file
import { Outlet } from 'react-router-dom'; // Import Outlet

//1.Put outlet into part where you want the code to change
//Whenever you call DashboardLayout in Route somewhere else, you will load DashboardLayout as parent and only stuff inside the Outlet will change
function DashboardLayout() {
  return (
    <div>
      <nav>...</nav> {/* frame — never changes */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

//2.nest parent ..Now All Route children will render in Outlet
//!!NO / WHEN ADDING ROUTES /dashboard/profile will be correct
<Routes>
  <Route path="/dashboard" element={<DashboardLayout />}>
    {' '}
    //parent that will not change
    <Route index element={<DashboardOverview />} /> //children, need index or
    rest wont load parent
    <Route path="profile" element={<DashboardProfile />} />
  </Route>
</Routes>;
