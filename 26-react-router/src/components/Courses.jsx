import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import courses from '../data/coursec'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
    const sortedCourses = [...courses]
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses
    }
    sortedCourses.sort((a, b) => a[key] > b[key] ? 1 : -1)
    return sortedCourses
}
export default function Courses() {
    const location = useLocation()
    const query = queryString.parse(location.search)
    const navigate = useNavigate()
    const [sortKey, setSortKey] = useState(query.sort)
    console.log(sortKey)
    const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))

    useEffect(() => {
        if(!SORT_KEYS.includes(sortKey)){
            navigate('.')
            setSortKey(undefined)
            setSortedCourses(...courses)
        }
    }, [sortKey, navigate])

    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : `Courses`}</h1>
            {sortedCourses.map((course) => (
                <div key={course.id}>
                    <NavLink to={course.slug} className="courseLink">
                        {course.title}
                    </NavLink>
                </div>
            ))}
        </>
    )
}
