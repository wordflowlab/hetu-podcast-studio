# 播客工坊功能清单

本包拥有专业能力；宿主拥有正文、来源与作者决定。

| 动作 | 用途 | 必填参数 | 效果 |
| --- | --- | --- | --- |
| list_projects | 查找专业工程 |  | read |
| get_project | 读取固定专业工程 | object_id | read |
| save_project | 保存完整专业工程 | expected_revision, expected_sha256, operation_key, content | managed_write |
| get_source | 分块读取固定来源 | object_id, source_index | read |
| get_basis | 读取固定专业依据 | object_id, basis_index | read |
| compare_versions | 比较固定专业修订 | object_id, from_revision, to_revision | read |
| export_project | 分块导出完整专业数据 | object_id, format | read |
| build_context | 准备有界创作上下文 | object_id, goal, max_chars | read |
| create_handoff | 准备本工程AI接续 | object_id, goal | read |
| get_operation | 回读原操作 | operation_key | read |
| put_recording | 维护固定录音 | object_id, expected_revision, expected_sha256, operation_key, recording | managed_write |
| put_cue | 维护原始选段 | object_id, expected_revision, expected_sha256, operation_key, cue | managed_write |
| put_section | 维护节目章节 | object_id, expected_revision, expected_sha256, operation_key, section | managed_write |
| remove_section | 移除节目章节 | object_id, expected_revision, expected_sha256, operation_key, section_id | managed_write |
| put_edition | 维护单集编排 | object_id, expected_revision, expected_sha256, operation_key, edition | managed_write |
| remove_edition | 移除单集编排 | object_id, expected_revision, expected_sha256, operation_key, edition_id | managed_write |
| put_note | 维护固定意见 | object_id, expected_revision, expected_sha256, operation_key, note | managed_write |
| remove_note | 移除固定意见 | object_id, expected_revision, expected_sha256, operation_key, note_id | managed_write |
| target_digest | 读取固定目标摘要 | object_id, target_kind, target_id | read |
| check_podcast | 检查录音编排与过期依据 | object_id | read |
| edition_basis | 固定选定单集依据 | object_id, items | read |
| edition_view | 读取实际帧与章节时间 | object_id, edition_id | read |
| compare_editions | 比较两种单集编排 | object_id, from_id, to_id | read |
| inspect_recording | 核验实际录音 | object_id, recording_id | read |
| locate_audio | 定位固定输出区间 | object_id, edition_id, time_ms | read |
| render_episode | 渲染固定顺序音频 | object_id, edition_id | read |
| export_script | 导出完整专业阅读本 | object_id | read |
| export_review | 导出完整审核本 | object_id | read |
| export_chapters | 导出固定映射JSON | object_id, edition_id | read |

默认流程、边界及验收见 [docs](docs/README.md)。
