import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import Meetings from './components/meetingComponents/meetings';
import CreateMeetings from './components/meetingComponents/CreateMeeting';

/////// ZZZ//////////////
const ScrumTable = React.lazy(() => import("./pages/scrumTable/ScrumTable"));
const Interview = React.lazy(() => import("./pages/interview/Interview"));
const EvaluationKpi = React.lazy(() =>
  import("./pages/evaluationKpi/EvaluationKpi")
);
const Rating = React.lazy(() => import("./pages/evaluationMembre/Rating"));
///////////////////ZAYNEB/////////////////////

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const ProjectList = React.lazy(() => import('./views/Projects/ProjectsList'));
const AddProject = React.lazy(() => import('./views/Projects/AddProject'));
const CurrentProject = React.lazy(() => import('./views/Projects/CurrentProject'));
const BacklogProject = React.lazy(() => import('./views/Projects/BacklogProject'));
const AddBacklog = React.lazy(() => import('./views/Projects/AddBacklog'));
const DragDrop = React.lazy(() => import('./views/Projects/DragDrop'));
const Statistics = React.lazy(() => import('./views/Statistics/Statistics'));
const AllReleases = React.lazy(() => import('./views/Projects/AllReleases'));
const AllIssues = React.lazy(() => import('./views/Projects/AllIssues'));
const AddIssue = React.lazy(() => import('./views/Projects/AddIssue'));
const BacklogForum = React.lazy(() => import('./views/BacklogSprint/BacklogSprint'));
const UserStory = React.lazy(() => import('./views/BacklogSprint/UserStory'));
const Backlog = React.lazy(() => import('./views/BacklogSprint/Backlog'));
const Vote = React.lazy(() => import('./views/BacklogSprint/TaskVote'));
const BackLogDetail = React.lazy(() => import('./views/BacklogSprint/BackLogDetail'));
const WishList = React.lazy(() => import('./views/BacklogSprint/MyWishList'));
const Votes = React.lazy(() => import('./views/BacklogSprint/Votes'));
const chart = React.lazy(() => import('./views/BacklogSprint/burnchart'));
const addFormation = React.lazy(() => import('./views/BacklogSprint/addformation'));
const cv = React.lazy(() => import('./views/BacklogSprint/mycv'));

const meetings = React.lazy(() => import('./components/meetingComponents/meetings'));
const createMeeting = React.lazy(() => import('./components/meetingComponents/CreateMeeting'));
const invite = React.lazy(() => import('./components/meetingComponents/inviteUsers'));
const passer = React.lazy(() => import('./components/ExamComponents/passerExams'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/projects/projectList', exact: true, name: 'All Projects', component: ProjectList},
  { path: '/projects/addProject', exact: true, name: 'Add Project', component: AddProject},
  { path: '/projects/currentProject', exact: true, name: 'Current Project', component: CurrentProject},
  { path: '/projects/BacklogProject', exact: true, name: 'Backlog Project', component: BacklogProject},
  { path: '/projects/AddBacklog', exact: true, name: 'Add Backlog', component: AddBacklog},
  { path: '/projects/DragDrop', exact: true, name: 'drag drop', component: DragDrop},
  { path: '/statistics', exact: true, name: 'statistics', component: Statistics},
  { path: '/projects/AllReleases', exact: true, name: 'all releases', component: AllReleases},
  { path: '/projects/AllIssues', exact: true, name: 'all releases', component: AllIssues},
  { path: '/projects/AddIssue', exact: true, name: 'all releases', component: AddIssue},
  //////DHIA/////////
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/meetings', name: 'meetings', component: Meetings },
  { path: '/createMeeting', name: 'create Meeting', component: createMeeting },
  { path: '/Meeting/invite', name: 'invite users', component: invite },
  { path: '/passerexam', name: 'invite users', component: passer },
  { path: '/inviteMeeting/:id', name: 'invite users', component: invite },

  //////IHEB//////
  { path: '/addstory', exact: true, name: 'Add BackLog', component: BacklogForum },
	{ path: '/userstory/:id', exact: true, name: 'Add BackLog', component: UserStory },
	{ path: '/backlogdisplay', exact: true, name: 'Add BackLog', component: Backlog },
	{ path: '/vote', exact: true, name: 'Vote', component: Vote },
	{ path: '/BackLogDetail/:id', name: 'Backlog detail', component: BackLogDetail },
	{ path: '/wishlist', exact: true, name: 'Wish List', component: WishList },
	{ path: '/votes', exact: true, name: 'Votes', component: Votes },
	{ path: '/chart', exact: true, name: 'chart', component: chart },
	{ path: '/addformation', exact: true, name: 'chart', component: addFormation },
	{ path: '/cv', exact: true, name: 'chart', component: cv },
  ////ZAYNEB/////
  {
    path: "/scrumTable",
    exact: true,
    name: "ScrumTable",
    component: ScrumTable
  },
  { path: "/interview", name: "Interview", component: Interview },
  { path: "/rating", exact: true, name: "Rating", component: Rating },
  { path: "/kpi-evaluation", name: "EvaluationKpi", component: EvaluationKpi }
  
];

export default routes;
