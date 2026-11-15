import { useEffect, useState, useSyncExternalStore } from "react";
import { useMutation } from "@tanstack/react-query";

import {
  Box,
  IconButton,
  List,
  Tooltip,
  Typography,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

import { apiClient } from "../../api/client.api";
import { documentStore } from "../../store/content.store";

import NodeRenderer from "../../components/contentManagement/NodeEditorRenderer";
import EditorSidebar from "../../components/contentManagement/EditorSideBar";
import { TreeNode } from "../../components/contentManagement/TreeNode";
import BlogEditorToolbar from "../../components/contentManagement/BlogEditorToolbar";
import BlogDetailsForm from "../../components/blogs/CreateBlogForm";
import { toFormData } from "axios";
import { 
  blogTreeContentSx, 
  blogTreeHeaderSx, 
  blogTreeSidebarSx, 
  createBlogCanvasSx, 
  createBlogContainerSx, 
  editorSettingsContentSx, 
  editorSidebarToggleSx,
  createBlogMainSx,
  editorSettingsSidebarSx
} from "./createBlogs.styles";

/**
 *
 * @returns {JSX.Element}
 */

function CreateBlog() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [blogId, setBlogId] = useState();

  const root = useSyncExternalStore(
    (listener) => documentStore.subscribeRoot(listener),
    () => documentStore.getRoot()
  );

  const createBlogMutation = useMutation({
    mutationFn: async (data) => {
      const formData = toFormData({ ...data, status:"draft" })
      const response = await apiClient.post("blogs", formData);
      return response.data?.data?.blog;
    },
    onSuccess: (blog) => {
      setBlogId(blog._id);
    },
  });

  useEffect(() => {
    if (!blogId) return;
    const rootNode = documentStore.newNode("Layout Vertical")
    documentStore.setRoot(rootNode);
    documentStore.addNode(rootNode);
    documentStore.selectNode(rootNode.id);
    return () => documentStore.clear();
  }, [blogId]);

  if (!blogId) {
    return (
      <BlogDetailsForm
        onSubmit={(values) =>{
          console.log(values)
          createBlogMutation.mutate(values)
        }}
        isSubmitting={createBlogMutation.isPending}
      />
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <BlogEditorToolbar blogId={blogId} root={root} />

      <Box
        sx={{
          ...createBlogContainerSx,
          flex: 1,
          minHeight: 0,
          height: "auto"
        }}
      >
        {/* Blog structure tree */}
        <Box component="aside" sx={blogTreeSidebarSx}>
          <Box sx={blogTreeHeaderSx}>
            <AccountTreeOutlinedIcon fontSize="small" color="action" />
            <Typography fontWeight={600} fontSize={14}>
              Blog Structure
            </Typography>
          </Box>

          <Box sx={blogTreeContentSx}>
            {root ? (
              <List dense disablePadding>
                <TreeNode node={root} />
              </List>
            ) : (
              <Typography color="text.secondary" variant="body2" sx={{ p: 1 }}>
                Loading structure...
              </Typography>
            )}
          </Box>
        </Box>

        {/* Blog editor canvas */}
        <Box component="main" sx={createBlogMainSx}>
          <Box sx={createBlogCanvasSx}>
            {root && <NodeRenderer node={root} />}
          </Box>
        </Box>

        {/* Editor settings sidebar */}
        <Box component="aside" sx={editorSettingsSidebarSx(sidebarOpen)}>
          <Tooltip title={sidebarOpen ? "Hide settings" : "Show settings"}>
          <IconButton
            onClick={() => setSidebarOpen((open) => !open)}
            sx={editorSidebarToggleSx(sidebarOpen)}
          >
            {sidebarOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Tooltip>
          <Box sx={editorSettingsContentSx}>
            <EditorSidebar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateBlog;

