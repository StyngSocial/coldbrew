import hive from "@hiveio/hive-js";

export default function handler(req, res) {
  const { sort, account, limit } = req.query;
  const params = {
    sort,
    account,
    limit,
  };
  hive.api
    .callAsync("bridge.get_account_posts", params)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => console.log(err));
}
/**
 * @param {*} sort Supported values
 *     blog - top posts authored by given account (excluding posts to communities - unless explicitely reblogged) plus reblogs ranked by creation/reblog time
 *     feed - top posts from blogs of accounts that given account is following ranked by creation/reblog time, not older than last month
 *     posts - op posts authored by given account, newer first comments - replies authored by given account, newer first
 *     replies - replies to posts of given account, newer first
 *     payout - all posts authored by given account that were not yet cashed out
 * @param account name, points to valid account
 * @param {*} limit
 */
