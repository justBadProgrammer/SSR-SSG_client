import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

// export default [
//     // index("routes/home.tsx"),
//     route('ssg/home', 'routes/home.tsx'),
//     route('ssg/first', 'routes/welcome/page1.tsx'),
//     route('ssg/second', 'routes/welcome/page2.tsx')
// ] satisfies RouteConfig;

export default [
    ...prefix('ssg',
        [
            route('home', 'routes/home.tsx'),
            route('first', 'routes/welcome/page1.tsx'),
            route('second', 'routes/welcome/page2.tsx'),
            route('third', 'routes/welcome/page3.tsx')
        ]
    )
    
] satisfies RouteConfig;


