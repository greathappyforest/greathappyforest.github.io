---
layout: leetcode
title: lintcode 0093-balanced-binary-tree
categories:
  - study
tags:
  - tree
  - algorithms
  - interview_2019
date: 2019-04-24 23:20:50
---

## <a href="https://www.lintcode.com/problem/balanced-binary-tree/description" target="_blank">0093-balanced-binary-tree</a>

### Description

<p>给定一个二叉树,确定它是高度平衡的。对于这个问题,一棵高度平衡的二叉树的定义是：一棵二叉树中每个节点的两个子树的深度相差不会超过1。&nbsp;<br></p>

### Example

```
样例  1:
	输入: tree = {1,2,3}
	输出: true

	样例解释:
	如下，是一个平衡的二叉树。
		  1
		 / \
		2  3


样例  2:
	输入: tree = {3,9,20,#,#,15,7}
	输出: true

	样例解释:
	如下，是一个平衡的二叉树。
		  3
		 / \
		9  20
		  /  \
		 15   7


样例  2:
	输入: tree = {1,#,2,3,4}
	输出: false

	样例解释:
	如下，是一个不平衡的二叉树。1的左右子树高度差2
		  1
		   \
		   2
		  /  \
		 3   4

```

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
    /**
     * @param root: The root of binary tree.
     * @return: True if this Binary tree is Balanced, or false.
     */

      public boolean isBalanced(TreeNode root) {
        // write your code here
        if(root==null)  return true;

        int leftDepth = getDepth(root.left);
        int rightDepth = getDepth(root.right);
        if(Math.abs(leftDepth-rightDepth)>1)
            return false;
        else
            return isBalanced(root.left) && isBalanced(root.right);
    }

    private int getDepth(TreeNode node) {
        if(node ==null) return 0;
        int leftDepth  = getDepth(node.left);
        int rightDepth  = getDepth(node.right);
        return Math.max(leftDepth,rightDepth)+1;
    }

}
```
