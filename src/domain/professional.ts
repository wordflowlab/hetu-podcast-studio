import {artifact} from './artifact.ts';
import {loadMedia,checkBounds,textArtifact} from './media-files.ts';
import {find} from './shared.ts';
import {validateDomain,validateTransition,editionBasis,targetDigest,editionView,renderEpisode,checkPodcast,scriptText} from './podcast.ts';
export {validateDomain,validateTransition};
export async function checkSources(p:any,s:any[],r:any){const media=await loadMedia(p.recordings,s,r);checkBounds(p.cues,media,'recording_id');for(const e of p.editions)if(e.items.length)editionView(p,e.id,media);}
export async function pureAction(_a:string,_i:any){return undefined;}
export async function writeProfessional(_a:string,_p:any,_s:any[],_i:any,..._rest:any[]){throw Error('未知专业写动作。');}
export function summaries(p:any){return [{title:'节目目标',lines:[p.brief]},{title:'主持台本',lines:[scriptText(p)]},{title:'原始录音选段',lines:p.cues.map((c:any)=>c.speaker+'：“'+c.quote+'”\n'+c.in_ms+'～'+c.out_ms+'ms；'+c.timing_note)},{title:'单集编排',lines:p.editions.map((e:any)=>e.title+'\n'+e.rationale+'\n'+e.items.map((x:any)=>x.kind==='silence'?'静音 '+x.silence_ms+'ms':find(p.cues,x.cue_id).title).join('\n'))},{title:'意见与复核',lines:p.notes.map((n:any)=>n.comment+'\n'+n.resolution).concat(JSON.stringify(checkPodcast(p),null,2))}];}
export async function readProfessional(a:string,p:any,s:any[],i:any,r:any){
 if(a==='target_digest')return {target_sha256:targetDigest(p,i.target_kind,i.target_id)};
 if(a==='check_podcast')return checkPodcast(p);
 if(a==='edition_basis')return {basis_sha256:editionBasis(p,i.items)};
 if(a==='edition_view')return editionView(p,i.edition_id,await loadMedia(p.recordings,s,r));
 if(a==='compare_editions'){const media=await loadMedia(p.recordings,s,r);return {from:editionView(p,i.from_id,media),to:editionView(p,i.to_id,media)};}
 if(a==='inspect_recording'){const m=(await loadMedia(p.recordings,s,r)).get(i.recording_id);if(!m)throw Error('录音不存在。');const {bytes,...meta}=m;return meta;}
 if(a==='locate_audio'){const v=editionView(p,i.edition_id,await loadMedia(p.recordings,s,r));return {stale:v.stale,items:v.stale?[]:v.items.filter(x=>x.output_start_ms<=i.time_ms&&i.time_ms<x.output_end_ms),note:v.stale?'编排依据已变化，不定位旧音频。':'当前编排真实采样帧位置'};}
 if(a==='render_episode'){const v=renderEpisode(p,i.edition_id,await loadMedia(p.recordings,s,r));return {...artifact(v.bytes,'播客单集.wav','audio/wav',i),report:v.report};}
 if(a==='export_script')return artifact(scriptText(p),'播客台本.txt','text/plain',i);
 if(a==='export_review'){const {reportHTML}=await import('./report.ts');return artifact(reportHTML({project:p}),'播客审核本.html','text/html',i);}
 if(a==='export_chapters'){const v=renderEpisode(p,i.edition_id,await loadMedia(p.recordings,s,r));return textArtifact(JSON.stringify(v.report.chapters,null,2)+'\n','播客章节.json',i);}
}
