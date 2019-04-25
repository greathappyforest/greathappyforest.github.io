---
layout: leetcode
title: lintcode 0596-minimum-subtree
categories:
  - study
tags:
  - tree
  - algorithms
  - interview_2019
date: 2019-04-24 23:22:25
---

## <a href="https://www.lintcode.com/problem/minimum-subtree/description" target="_blank">0596-minimum-subtree</a>

### Description

给一棵二叉树, 找到和为最小的子树, 返回其根节点。

### Notice

LintCode 会打印根节点为你返回节点的子树。保证只有一棵和最小的子树并且给出的二叉树不是一棵空树。

### Example

例 1:

```
输入:
     1
   /   \
 -5     2
 / \   /  \
0   2 -4  -5

输出:1
```

例 2:

```
输入:
   1
输出:1
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
     * @param root: the root of binary tree
     * @return: the root of the minimum subtree
     */
   public int minSum = Integer.MAX_VALUE;
    public TreeNode minNode = null;

    public TreeNode findSubtree(TreeNode root) {
        // write your code here
        if(root ==null) return null;

        helper(root);
        return minNode;
    }

    private int helper(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int sum = root.val +helper(root.left)+helper(root.right);
        if(sum<minSum){
            minSum = sum;
            minNode = root;
        }
        return sum;
    }
}
```
