export const projects = [
	{
		uri: 'event-locator',
		name: 'Event Locator',
		shortDescription: 'Two Android applications and a backend server, built as final year project for graduating from University. This system provides a way for users to discover and register for public events.',
		sections: [
			{
				title: 'How it all began',
				content: <>
					<p>It was my last year in university, and of course, with the last year comes the last year&apos;s project (also known as a &quot;graduation project&quot;). So me and my partner (who happens to be one of my best friends) <a href="https://www.linkedin.com/in/adel-minwer-33708a142/" target="_blank">Adel Minwer</a> got to work trying to come up with a cool and interesting idea to implement.</p>
					<br/>
					<p>We wanted to come with an idea that would be fun to implement, an idea that would give us the opportunity to learn and grow, an idea that provides value to its users. We were ambitious, and thus, the idea of Event Locator was born.</p>
				</>,
			},
			{
				title: 'What is Event Locator?',
				content: <>
					<p>Event Locator is a platform for organizing and registering for public events, it was divided into two applications, the first was targeted to be used by event organizers, they to create and manage their events, while the second, was for participants who wanted to register for and attend events. All of this was connected to one backend server and a database.</p>
				</>,
			},
			{
				title: 'Core features: Organizers\' app',
				content: <>
					<p>Event organizers had a variety of options when it came to creating events, they could create events with multiple sessions spanning multiple days, giving them flexibility to fine grain the timing of their events.</p>
					<br/>
					<p>They could also choose whether the event is remote or in a physical place, and for the latter, they could limit the number of participants that can attend.</p>
					<br/>
					<p>In order to ensure that the people who are actually registered for the event are admitted, we created a ticketing system, whenever someone registers for a limited event, a QR code gets generated, using the app, the organizer can scan the QR code to let participants into the place where the event is being held.</p>
					<br/>
					<p>After the event is finished, organizers can access statistics about the event, notably, the number of people who attended and the percentage of people who attended compared to the total number of registrants.</p>
					<br/>
					<p>Additionally, organizers can manage their profiles, by adding bios, contact info, and social links, they can also view their followers.</p>
				</>,
			},
			{
				title: 'Core features: Participants app',
				content: <>
					<p>As soon as users open the app, they get to see a feed of all upcoming events, they can expand each event and read about its details, and eventually register for one of the events.</p>
					<br/>
					<p>They can also check any Organizer&apos;s profile and follow ones they are interested in, and in the home page, a different tab shows upcoming events that are organized by organizers the user follows.</p>
					<br/>
					<p>Additionally, users can filter out events on the home page based on a wide variety of criteria to match what they&apos;re looking for.</p>
					<br/>
					<p>And finally, they can manage their profiles and check the events they are registered for and attended in the past.</p>
				</>,
			},
			{
				title: 'Technologies used',
				content: <>
					<p>For the apps, the primary technology used was the Android framework using Kotlin programming language and using Retrofit2 package to handle API calls.</p>
					<br/>
					<p>For the backend, it was built using NodeJS, the underlying database was a MySQL database, Firebase was also used to handle push notifications, and SendGrid was used to manage the emails that get sent out to users when performing certain actions.</p>
					<br/>
					<p>A little bit of JSX was used to serve a small admin page that&apos;s used to manage registration requests by organizers.</p>
				</>,
			},
			{
				title: 'Repos',
				content: <>
					<h4>Frontend: </h4>
					<div>
						<a href="https://github.com/Ahmad-Alawneh99/EventLocator_Organizers" target="_blank">EventLocator_Organizers</a>
						<br/>
						<a href="https://github.com/Ahmad-Alawneh99/Event_Locator" target="_blank">Event_Locator</a>
					</div>
					<br/>
					<h4>Backend: </h4>
					<div>
						<a href="https://github.com/deko966/eventlocator_backend" target="_blank">EventLocator_backend</a>
					</div>
				</>,
			},
		],
		hasGallery: true,
		imageList: [
			{image: '/gallery/organizers_sign_up.jpg', title: 'Organizer sign up'},
			{image: '/gallery/organizers_setup_profile.jpg', title: 'Organizer setup profile'},
			{image: '/gallery/organizers_create_event_form.jpg', title: 'Create event form'},
			{image: '/gallery/organizers_profile_page.jpg', title: 'Organizer profile page'},
			{image: '/gallery/my_events.jpg', title: 'My events page'},
			{image: '/gallery/events_feed.jpg', title: 'Events feed (home page)'},
			{image: '/gallery/event_filter.jpg', title: 'Events filter'},
			{image: '/gallery/email_notification_for_registering.jpg', title: 'Email notification'},
		],
	},
	{
		uri: 'vetrina',
		name: 'Vetrina',
		shortDescription: 'An e-commerce system providing users with the ability to create their own online stores, while providing them with a large array of services to support their stores.',
		sections: [
			{
				title: 'A new challenge',
				content: <>
					<p>Shortly after my graduation, I got in touch with my buddy <a href="https://www.linkedin.com/in/hatem-abushaala/" target="_blank">Hatem abushaala</a>, he is the CTO and Co-founder of <a href="https://www.linkedin.com/company/saweyyan/" target="_blank">Saweyyan</a>, a startup IT service provider based in Libya, he presented me with an opportunity to work on the backend of one of Saweyyan&apos;s upcoming projects, that project was Vetrina.</p>
				</>,
			},
			{
				title: 'Vetrina at a glance',
				content: <>
					<p>Vetrina is an e-commerce application, providing its users with the ability to create their online store in a short amount of time, while providing them with a wide range of services to help them manage their stores.</p>
				</>,
			},
			{
				title: 'Technologies used',
				content: <>
					<p>The backend side of Vetrina was built using <a href="https://strapi.io/" target="_blank">Strapi</a>, a framework that generates a backend server in NodeJS and handles a lot of the mundane tasks when building a Node application from scratch.</p>
					<br/>
					<p>Strapi also manages the database and the connection to the database from the code with ease.</p>
					<br/>
					<p>It&apos;s worth mentioning that even though most elements of the application get generated by Strapi, it still provides the option to customize and change anything, new endpoints can be added for complex queries, and existing ones can be modified to expand on the default functionality.</p>
					<br/>
					<p>Finally, Strapi provides a dashboard to access and manage some of the features without having to touch the code, making it easy to update things like the database&apos;s structure.</p>
				</>,
			},
			{
				title: 'My contribution to Vetrina',
				content: <>
					<p>Aside from building the base functionality from the e-commerce side, like handling the logic for products, categories and other e-commerce related entities, I helped with the planning and architecture of a handful of features (as well as implementation), such as, the integration with the payment processing system and the integration with the delivery service to handle delivering users&apos; purchases.</p>
					<br/>
					<p>Additionally, in the earlier days of the project, I took part in designing the entire database of the application, which was designed to support a multi-tenant architecture. The database a MySQL database.</p>
				</>,
			},
			{
				title: 'Discover more',
				content: <>
					<h4>Vetrina&apos;s homepage: </h4>
					<a href="https://www.vetrinas.ly/" target="_blank">https://www.vetrinas.ly/</a>
					<br/>
					<p>Another shout out to my friend <a href="https://www.linkedin.com/in/hatem-abushaala/" target="_blank">Hatem</a> and the amazing people at <a href="https://www.linkedin.com/company/saweyyan/" target="_blank">Saweyyan</a></p>
				</>,
			},
		],
	},
];
