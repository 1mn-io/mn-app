import { _p_TYP, _pp_TYP } from '../shared/types';
declare const index: (_p: _p_TYP) => Promise<{
    set: (_pp: _pp_TYP) => Promise<{
        r: string;
        head: string;
        style: string;
    }>;
}>;
export { index, index as renderer };
