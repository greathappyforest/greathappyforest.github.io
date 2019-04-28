---
layout: leetcode
title: lintcode-453 Flatten Binary Tree to Linked List
categories:
  - study
tags:
  - tree
  - algorithms
  - interview_2019
date: 2019-04-28 12:49:55
---

## <a href="https://www.lintcode.com/problem/flatten-binary-tree-to-linked-list/description" target="_blank">0453-flatten-binary-tree-to-linked-list</a>

### Description

将一棵二叉树按照前序遍历拆解成为一个 `假链表`。所谓的假链表是说，用二叉树的 _right_ 指针，来表示链表中的 _next_ 指针。

### Notice

不要忘记将左儿子标记为 null，否则你可能会得到空间溢出或是时间溢出。

### Example

**样例 1：**

```
输入：
{1,2,5,3,4,#,6}
     1
    / \
   2   5
  / \   \
 3   4   6
输出：
{1,#,2,#,3,#,4,#,5,#,6}
1
\
 2
  \
   3
    \
     4
      \
       5
        \
         6
```

**样例 2：**

```
输入：
{1}
1
输出：
{1}
1
```

### Challenge

不使用额外的空间耗费。

```java
/**
 * Definition of TreeNode:
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 */


public class Solution {
    /*
     * @param root: a TreeNode, the root of the binary tree
     * @return:
     */

    TreeNode leftLast = null;
    public void flatten(TreeNode root) {
       helper(root);

    }

    public TreeNode helper(TreeNode root){
         // write your code here
       if (root == null)     return null;

        TreeNode leftLast = helper(root.left);
        TreeNode rightLast = helper(root.right);

         // connect leftLast to root.right
        if(leftLast!=null){
            leftLast.right = root.right;
            root.right = root.left;
            root.left = null;
        }

        if (rightLast != null)   return rightLast;

        if (leftLast != null)     return leftLast;

        return root;
    }


}
```
