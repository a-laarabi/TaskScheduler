function assignTasksWithPriorityAndDependencies(developers, tasks) {

    class TaskScheduler {
        constructor(developers, tasks) {
            this.developers = developers.map(dev => ({
                ...dev,
                assignedTasks: [],
                currentHours: 0
            }));
            this.tasks = tasks.map(task => ({
                ...task,
                assigned: false,
                dependenciesMet: task.dependencies.length === 0
            }));
        }

        // Check if dependencies for a task are completed
        areDependenciesMet(task) {
            return task.dependencies.every(depName =>
                this.tasks.find(t => t.taskName === depName)?.assigned
            );
        }

        // Calculate task score for a developer
        calculateSuitabilityScore(developer, task) {
            const skillMatchScore = Math.abs(developer.skillLevel - task.difficulty);
            const typeMatchScore = developer.preferredTaskType === task.taskType ? 0 : 1;
            const remainingHoursScore = developer.maxHours - developer.currentHours >= task.hoursRequired ? 0 : 1;

            return skillMatchScore + typeMatchScore + remainingHoursScore;
        }

        assignTasks() {
            const sortedTasks = this.tasks
                .filter(task => !task.assigned)
                .sort((a, b) => {
                    if (b.priority !== a.priority) return b.priority - a.priority;
                    return b.difficulty - a.difficulty;
                });

            for (const task of sortedTasks) {

                // Skip tasks with un met dependencies
                if (!this.areDependenciesMet(task)) continue;

                // Find the most suitable developer
                const availableDevelopers = this.developers
                    .filter(dev =>
                        dev.currentHours + task.hoursRequired <= dev.maxHours
                    );

                const bestDeveloper = availableDevelopers.reduce((best, current) =>
                    this.calculateSuitabilityScore(current, task) <
                        this.calculateSuitabilityScore(best, task) ? current : best
                );

                // Assign task
                bestDeveloper.assignedTasks.push(task);
                bestDeveloper.currentHours += task.hoursRequired;
                task.assigned = true;
            }

            return {
                developers: this.developers.map(dev => ({
                    name: dev.name,
                    assignedTasks: dev.assignedTasks.map(task => (
                        task.taskName
                    )),
                    totalWorkHours: dev.currentHours
                })),
                unassignedTasks: this.tasks.filter(t=> t.assigned === false)
            };
        }
    }
    const scheduler = new TaskScheduler(developers, tasks);
    return scheduler.assignTasks();
}