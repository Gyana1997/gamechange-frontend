import pages from './pages';

const {
    Home,
    EventPageForm
} = pages;

export const groups = [
    {
		group: 'home',
		isPublic: true,
		routes: [
			{
				title: 'Home',
				path: '/login',
				icon: 'home',
                component: Home,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    },

    {
    	group: 'EventPageForm',
		isPublic: true,
		routes: [
			{
				title: 'EventPageForm',
				path: '/event-entry',
				icon: 'event-entry',
                component: EventPageForm,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    }

    
];

const joinFn = (acc = [], curr) => {
	return acc.concat(curr);
};

export const allRoutes = groups
	.map(function merge(group) {
		const { routes } = group;
		const subRoutes = routes.map(route => route.subRoutes).reduce(joinFn);
		return routes.concat(subRoutes);
	})
	.reduce(joinFn);

export const getGroups = () => groups;

export default {
	groups,
	allRoutes
};