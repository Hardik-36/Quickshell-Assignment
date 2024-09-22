import HighPriorityIcon from '../assets/high-priority.svg';
import LowPriorityIcon from '../assets/low-priority.svg';
import MediumPriorityIcon from '../assets/medium-priority.svg';
import UrgentIcon from '../assets/urgent.svg';
import NoPriorityIcon from '../assets/no-priority.svg';
import ToDoIcon from '../assets/to-do.svg';
import InProgressIcon from '../assets/in-progress.svg';

export const priorityData = {
    0: { text: 'No priority', icon: NoPriorityIcon },
    4: { text: 'Urgent', icon: UrgentIcon },
    3: { text: 'High', icon: HighPriorityIcon },
    2: { text: 'Medium', icon: MediumPriorityIcon },
    1: { text: 'Low', icon: LowPriorityIcon },
};

export const statusIcons = {
    'To Do': ToDoIcon,
    'In Progress': InProgressIcon,
};
