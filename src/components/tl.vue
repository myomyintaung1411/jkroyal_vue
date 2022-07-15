<template>
    <td>
        <div v-if="bet.rType === 'dx' || bet.rType === 'ssc'
        || bet.rType === 'jsk3'
        || bet.rType === 'bjcs' || bet.rType === 'tts' ||
        bet.rType === 'bjl' || bet.rType === 'lh'" style="display: flex; justify-content: flex-start;"
            :style="bet.showResult.length > 3 ? 'overflow-x: scroll' : ''">
            <div v-for="(item, inde) in bet.showResult" :key="inde" style="white-space: nowrap; margin: 0 5px;">
                <span :style="(item.indexOf('庄') !== -1 || item.indexOf('龙') !== -1 ||
            item.indexOf('大') !== -1 || item.indexOf('双') !== -1)
            ? 'color: red'
            : (item.indexOf('闲') !== -1 || item.indexOf('虎') !== -1 ||
                item.indexOf('单') !== -1 || item.indexOf('小') !== -1)
                ? 'color: blue'
                : (item.indexOf('和') !== -1 || item.indexOf('同点') !== -1) ? 'color: green' : ''">
                    {{ item }}
                    <span v-if="bet.rType === 'bjl'">
                        {{ item }}
                    </span>
                    <span v-if="bet.rType === 'lh'">
                        {{ item }}
                    </span>
                    <span v-if="bet.rType === 'dx'">
                        {{ item }}
                    </span>
                    <span v-if="bet.rType === 'tts'">
                        {{ item }}
                    </span>
                </span>
            </div>
        </div>

        <div v-if="bet.rType === 'nn'" class="nn_info">
            <!-- <span v-if="bet.niuniuResult" style="position: absolute; right: 5px; top: 5px;">
                <el-popover
                  placement="top-start"
                  :title="$t('table.result_detail')"
                  width="200"
                  trigger="hover"
                  :content="${$t('table.first_gate')} = ${bet.result.split('|')[0]}; 
                  ${$t('table.second_gate')} = ${bet.result.split('|')[1]}; 
                  ${$t('table.third_gate')} = ${bet.result.split('|')[2]}"
                >
                  <el-button slot="reference" icon="el-icon-question" circle size="mini" />
                </el-popover>
              </span> -->
            <div>
                <span v-for="(n, index) in bet.niuniu" :key="index" class="nn_info_container">
                    <p class="nn_info_title" :style="n.indexOf('闲') != -1 ? 'color: blue' : 'color: red'">
                        {{ n }}
                        <!-- <span style="color: #000">：</span> -->
                    </p>
                </span>
            </div>
            <div>
                <span v-for="(n, i) in bet.niuniuBet" :key="i" class="nn_info_container">
                    <p class="nn_info_bet_show">
                        {{ n }}
                    </p>
                </span>
            </div>
            <div v-if="bet.niuniuResult" style="margin-left: 5px;">
                <span v-for="(n, i) in bet.nnWinLose" :key="i" class="nn_info_container">
                    <span v-if="n === '输'" class="nn_info_bet_show" style="color: #FF1744">lose</span>
                    <span v-else class="nn_info_bet_show" style="color: #00C853">win</span>
                </span>
            </div>
        </div>
    </td>
</template>