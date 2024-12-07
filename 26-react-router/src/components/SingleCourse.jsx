import React, { useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/coursec'

export default function SingleCourse() {
    const params = useParams()
    const navigate = useNavigate()

    const course = courses.find((course) => course.slug === params.slug)

    useEffect(() => {
        if (!course) {
            navigate('..', { relative: 'path' })
        }
    }, [course, navigate])

    // Simply show NotFound component
    // if (!course) {
    //     return <NotFound/>
    // }

    return (
        <>
            <h1>{course?.title}</h1>
            <h2>{course?.slug}</h2>
            <h2>{course?.id}</h2>
            <NavLink to=".." relative="path">All Courses</NavLink>
        </>
    )
}
