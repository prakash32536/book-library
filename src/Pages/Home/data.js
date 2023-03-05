import AddIcon from '@mui/icons-material/Add';
import PreviewIcon from '@mui/icons-material/Preview';
import SearchIcon from '@mui/icons-material/Search';

export const datas = [
  {
    id: 1,
    title: "Add a Book",
    description: 'Add your book page and information',
    icon: <AddIcon />,
    route: "/add-books"
  },
  {
    id: 2,
    title: "View a Book",
    description: "View your book page and description",
    icon: <PreviewIcon />,
    route: "/view-book"
  },
  {
    id: 3,
    title: "Search a Book",
    description: "Search your book page and description",
    icon: <SearchIcon />
  }
];