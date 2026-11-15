import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BlogCard from "../../components/blogs/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../api/client.api";
import { 
  pageSx, 
  heroContentSx, 
  heroDescriptionSx, 
  heroEyebrowSx, 
  heroSx, 
  heroTitleSx, 
  categoryButtonSx, 
  categoryListSx,
  blogGridSx,
  blogSectionSx,
  searchContainerSx,
  searchIconSx,
  searchInputSx,
  sectionEyebrowSx,
  sectionHeaderSx,
  sectionTitleSx
} from "./blogs.styles"

const BlogsPage = () => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => (await apiClient.get("/blogs")).data?.data
  })

  const { data:categories, isLoading:isCategoriesLoading, isError:isCategoriesError } = useQuery({
    queryKey:["categories"],
    queryFn: async () => (await apiClient.get("/categories")).data?.data?.categories
  })

  if(isLoading){
    return(
      <Box>
        Loading...
      </Box>
    )
  }

  if(isError){
    return(
      <Box>
         error occured while fetching blogs: {error.message}
      </Box>
    )
  }

  const blogs = data?.blogs

  return (
    <Stack component="main" sx={pageSx}>
      {/* Hero */}
      <Box component="section" sx={heroSx}>
        <Box sx={heroContentSx}>
          <Typography variant="overline" sx={heroEyebrowSx}>
            Shah Law Firm
          </Typography>

          <Typography variant="h1" sx={heroTitleSx}>
            Legal Insights & Resources
          </Typography>

          <Typography variant="body1" sx={heroDescriptionSx}>
            Explore practical legal information, guidance, and insights
            designed to help you better understand your rights, options, and
            the legal matters that may affect you.
          </Typography>

          <Box sx={searchContainerSx}>
            <OutlinedInput
              fullWidth
              placeholder="Search articles..."
              sx={searchInputSx}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={searchIconSx} />
                </InputAdornment>
              }
            />
          </Box>
        </Box>
      </Box>

      {/* Blogs */}
      <Box component="section" sx={blogSectionSx}>
        <Box sx={sectionHeaderSx}>
          <Box>
            <Typography variant="overline" sx={sectionEyebrowSx}>
              Our Articles
            </Typography>

            <Typography variant="h2" sx={sectionTitleSx}>
              Explore Our Legal Insights
            </Typography>
          </Box>

          <Stack direction="row" sx={categoryListSx}>
            {
              !isCategoriesLoading &&
              !isCategoriesError &&
              categories.map((category, index) => (
                <Button
                  key={category._id}
                  variant={index === 0 ? "contained" : "outlined"}
                  color={index === 0 ? "primary" : "inherit"}
                  size="small"
                  sx={categoryButtonSx}
                >
                  {category.name}
                </Button>
              ))}
          </Stack>
        </Box>

        <Box sx={blogGridSx}>
          {blogs.map((blog) => {
              return (<BlogCard blog={blog}/>)
            })}
        </Box>
      </Box>
    </Stack>
  );
};

export default BlogsPage;
