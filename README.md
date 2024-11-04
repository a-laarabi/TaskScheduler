# Advanced Task Scheduling - JavaScript

This repository contains a solution to the **Advanced Task Scheduling**. The algorithm dynamically allocates tasks to developers based on skill level, task priority, dependencies, and available resources.

### Problem Overview

The objective is to create a function that:
1. **Assigns tasks** to developers based on their skill levels, available hours, task preferences, task priorities, and dependencies.
2. Ensures that **tasks with dependencies** are assigned only after their prerequisites are completed.
3. Distributes workload evenly while prioritizing high-priority tasks.

### Input Structure

- **Developers**: Each developer has a name, skill level, maximum hours they can work, and preferred task type.
- **Tasks**: Each task has a name, difficulty level, required hours, type, priority, and any dependencies on other tasks.


### How to Use the Script

To use this task scheduling script, follow these steps:

1. **Provide Input Data**: 
   - Prepare two arrays: one for `developers` and one for `tasks`, following the specified schema below.

#### Developer Schema

Each developer should have the following properties:
- `name` (string): The developer's name.
- `skillLevel` (number): Skill level (from 1 to 10).
- `maxHours` (number): Maximum hours the developer can work in a week.
- `preferredTaskType` (string): Type of task the developer prefers (e.g., `'feature'`, `'bug'`, `'refactor'`).

Example:
```javascript
const developers = [
    { name: 'Alice', skillLevel: 7, maxHours: 40, preferredTaskType: 'feature' },
    { name: 'Bob', skillLevel: 9, maxHours: 30, preferredTaskType: 'bug' },
    { name: 'Charlie', skillLevel: 5, maxHours: 35, preferredTaskType: 'refactor' },
];
```

#### Task Schema
Each task should have the following properties:

- `taskName` (string): The name of the task.
- `difficulty` (number): Task difficulty level (from 1 to 10).
- `hoursRequired` (number): Estimated hours needed to complete the task.
- `taskType` (string): Type of task (e.g., `'feature'`, `'bug'`, `'refactor'`).
- `priority` (number): Task priority level (from 1 to 5).
- `dependencies` (array): List of task names that must be completed before this task.

Example:
```javascript
const tasks = [
    { taskName: 'Feature A', difficulty: 7, hoursRequired: 15, taskType: 'feature', priority: 4, dependencies: [] },
    { taskName: 'Bug Fix B', difficulty: 5, hoursRequired: 10, taskType: 'bug', priority: 5, dependencies: [] },
    { taskName: 'Refactor C', difficulty: 9, hoursRequired: 25, taskType: 'refactor', priority: 3, dependencies: ['Bug Fix B'] },
];
```

2. **Run the Function**: 

Call the `assignTasksWithPriorityAndDependencies` function with your `developers` and `tasks` arrays as arguments:

``` javascript
const result = assignTasksWithPriorityAndDependencies(developers, tasks);
console.log(result);
```

### Output
The function will return an array of developers with their assigned tasks and total work hours, as well as a list of any unassigned tasks.


### Authors
👤 Anasse Laarabi
- GitHub: [@a-laarabi](https://github.com/a-laarabi)
- LinkedIn: [Laarabi](https://www.linkedin.com/in/a-laarabi/)

