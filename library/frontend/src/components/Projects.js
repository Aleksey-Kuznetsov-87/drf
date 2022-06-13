import React from 'react'

const ProjectItem = ({project}) => {
    return (
        <tr align="left">
            <td>
                {project.count}
            </td>
            <td>
                {project.results.url}
            </td>
            <td>
                {project.results.name_project}
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <table cellSpacing="8">
            <th align="left">
                ID
            </th>
            <th align="left">
                Название книги
            </th>
            <th align="left">
                Имя автора
            </th>
            {projects.map((project) => <ProjectItem project={project}/>)}
        </table>
    )
}

export default ProjectList